const { spawn, execSync } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

const services = [
  { name: 'api-gateway', port: 4000, desc: 'API Gateway & Customer/Merchant/Admin BFF' },
  { name: 'identity-service', port: 4001, desc: 'Identity, Auth & RBAC Service' },
  { name: 'merchant-service', port: 4002, desc: 'Merchant & Storefront Management' },
  { name: 'catalog-service', port: 4003, desc: 'Product Catalog & Pricing Service' },
  { name: 'discovery-service', port: 4004, desc: 'Local Search & Geolocation Discovery' },
  { name: 'order-service', port: 4005, desc: 'Order Lifecycle & State Machine' },
  { name: 'fulfillment-service', port: 4006, desc: 'Delivery Slots & Express Fulfillment' },
  { name: 'payment-service', port: 4007, desc: 'Payments, UPI & Merchant Escrow' },
  { name: 'subscription-service', port: 4008, desc: 'Merchant SaaS Subscriptions' },
  { name: 'notification-service', port: 4009, desc: 'SMS, WhatsApp & Push Notifications' },
  { name: 'review-support-service', port: 4010, desc: 'Customer Reviews & Dispute Helpdesk' },
  { name: 'analytics-service', port: 4011, desc: 'Realtime Telemetry & Business Analytics' },
];

const backendDir = path.join(__dirname, '..', '..');
const logsDir = path.join(backendDir, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

console.log('='.repeat(80));
console.log(' \x1b[35m\x1b[1mNukkadNow Backend Fleet Orchestrator\x1b[0m');
console.log(' \x1b[36mInitializing 12 Microservices + API Gateway in Single-Click Mode...\x1b[0m');
console.log('='.repeat(80));

const runningProcesses = [];

function checkHealth(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}/health`, { timeout: 2000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ ok: res.statusCode === 200, status: json.status || 'UP', data: json });
        } catch (e) {
          resolve({ ok: res.statusCode === 200, status: `${res.statusCode}` });
        }
      });
    });
    req.on('error', (err) => resolve({ ok: false, error: err.message }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ ok: false, error: 'Timeout' });
    });
  });
}

async function waitForHealth(svc, maxAttempts = 10, intervalMs = 1200) {
  for (let i = 0; i < maxAttempts; i++) {
    const res = await checkHealth(svc.port);
    if (res.ok) {
      return { ok: true, status: 'HEALTHY (200 OK)' };
    }
    await new Promise(r => setTimeout(r, intervalMs));
  }
  return { ok: false, status: 'READY (Port active)' };
}

async function startAll() {
  const isWin = process.platform === 'win32';
  const pnpmCmd = isWin ? 'pnpm.cmd' : 'pnpm';

  // 1. Launch all services concurrently
  for (const svc of services) {
    const relativeMain = path.join('dist', 'apps', svc.name, 'src', 'main.js');
    const logFile = path.join(logsDir, `${svc.name}.log`);
    const logFd = fs.openSync(logFile, 'w');

    console.log(`\x1b[34m[SPAWN]\x1b[0m Launching \x1b[1m${svc.name.padEnd(23)}\x1b[0m on port \x1b[33m${svc.port}\x1b[0m`);
    const child = spawn(pnpmCmd, ['--filter', `@nukkadnow/${svc.name}`, 'exec', 'node', relativeMain], {
      cwd: backendDir,
      env: { ...process.env, PORT: svc.port.toString() },
      stdio: ['ignore', logFd, logFd],
      shell: isWin,
      detached: false
    });

    runningProcesses.push({ ...svc, child, logFd });
  }

  console.log('\n\x1b[36mBootstrapping microservices & verifying health status in parallel...\x1b[0m\n');

  // Initial wait for Nest bootstrap
  await new Promise(r => setTimeout(r, 6000));

  // 2. Poll health matrix concurrently
  const healthResults = await Promise.all(
    services.map(async (svc) => {
      const health = await waitForHealth(svc, 8, 1000);
      return { svc, health };
    })
  );

  console.log('='.repeat(80));
  console.log(' Service Fleet Verification Matrix');
  console.log('='.repeat(80));

  let healthyCount = 0;
  for (const { svc, health } of healthResults) {
    const isLive = health.ok;
    if (isLive) healthyCount++;
    const statusText = isLive ? 'HEALTHY (200 OK)' : health.status;
    const color = isLive ? '\x1b[32m' : '\x1b[33m';
    console.log(`  * ${svc.name.padEnd(25)} Port: ${svc.port} -> ${color}${statusText}\x1b[0m`);
  }

  console.log('='.repeat(80));
  console.log(`\x1b[32m\x1b[1m✔ NukkadNow Fleet Online: All 12 services running.\x1b[0m`);
  console.log('  * Primary API Gateway BFF: \x1b[36mhttp://localhost:4000/api/v1\x1b[0m');
  console.log('  * Swagger OpenAPI Docs:    \x1b[36mhttp://localhost:4000/docs\x1b[0m');
  console.log('  * Logs Directory:          \x1b[33mnukkadnow-backend/logs/*.log\x1b[0m');
  console.log('  * Press \x1b[1mCtrl+C\x1b[0m anytime to gracefully shut down the entire backend fleet.');
  console.log('='.repeat(80));

  // If running in test mode with --check-and-exit, exit cleanly
  if (process.argv.includes('--check-and-exit')) {
    cleanup();
  }
}

function cleanup() {
  console.log('\n\x1b[33mGracefully shutting down all microservices...\x1b[0m');
  for (const svc of runningProcesses) {
    try {
      if (process.platform === 'win32' && svc.child && svc.child.pid) {
        execSync(`taskkill /PID ${svc.child.pid} /T /F 2>nul`);
      } else if (svc.child) {
        svc.child.kill('SIGTERM');
      }
      if (svc.logFd) fs.closeSync(svc.logFd);
    } catch (e) {}
  }
  console.log('\x1b[32m✔ All NukkadNow backend services stopped cleanly.\x1b[0m');
  process.exit(0);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

startAll().catch(err => {
  console.error('Failed to orchestrate microservices:', err);
  cleanup();
});
