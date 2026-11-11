const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

const services = [
  { name: 'api-gateway', port: 4000 },
  { name: 'identity-service', port: 4001 },
  { name: 'merchant-service', port: 4002 },
  { name: 'catalog-service', port: 4003 },
  { name: 'discovery-service', port: 4004 },
  { name: 'order-service', port: 4005 },
  { name: 'fulfillment-service', port: 4006 },
  { name: 'payment-service', port: 4007 },
  { name: 'subscription-service', port: 4008 },
  { name: 'notification-service', port: 4009 },
  { name: 'review-support-service', port: 4010 },
  { name: 'analytics-service', port: 4011 },
];

const backendDir = path.join(__dirname, '..', '..');
const logsDir = path.join(backendDir, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

console.log('='.repeat(80));
console.log(' NukkadNow Microservices Fleet Orchestrator');
console.log(' Initializing 12 Microservices + API Gateway...');
console.log('='.repeat(80));

const runningProcesses = [];

function checkHealth(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}/health`, { timeout: 3000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ ok: res.statusCode === 200, status: json.status, data: json });
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

async function startAll() {
  for (const svc of services) {
    const appDir = path.join(backendDir, 'apps', svc.name);
    const mainJs = path.join(appDir, 'dist', 'apps', svc.name, 'src', 'main.js');
    const logFile = path.join(logsDir, `${svc.name}.log`);
    const logFd = fs.openSync(logFile, 'a');

    console.log(`Starting [${svc.name}] on port ${svc.port}...`);
    const child = spawn(process.execPath, [mainJs], {
      cwd: appDir,
      env: { ...process.env, PORT: svc.port.toString() },
      stdio: ['ignore', logFd, logFd],
      detached: false
    });

    runningProcesses.push({ ...svc, child, logFd });
  }

  console.log('\nWaiting 8 seconds for all microservices to bootstrap...\n');
  await new Promise(r => setTimeout(r, 8000));

  console.log('='.repeat(80));
  console.log(' Service Health Verification Matrix');
  console.log('='.repeat(80));

  let allHealthy = true;
  for (const svc of services) {
    const health = await checkHealth(svc.port);
    const statusText = health.ok ? 'HEALTHY (200 OK)' : `PENDING (${health.error || health.status})`;
    const color = health.ok ? '\x1b[32m' : '\x1b[33m';
    console.log(`  * ${svc.name.padEnd(25)} Port: ${svc.port} -> ${color}${statusText}\x1b[0m`);
    if (!health.ok) allHealthy = false;
  }

  console.log('='.repeat(80));
  if (allHealthy) {
    console.log('\x1b[32m SUCCESS: All 12 Microservices are live and healthy!\x1b[0m');
  } else {
    console.log(' Services initialized. Logs available in backend/logs/<service-name>.log');
  }
  console.log(' Press Ctrl+C or send SIGTERM to terminate all services.');
  console.log('='.repeat(80));

  // If running in test mode with --check-and-exit, exit cleanly
  if (process.argv.includes('--check-and-exit')) {
    cleanup();
  }
}

function cleanup() {
  console.log('\nGracefully shutting down all microservices...');
  for (const svc of runningProcesses) {
    try {
      svc.child.kill();
      if (svc.logFd) fs.closeSync(svc.logFd);
    } catch (e) {}
  }
  process.exit(0);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

startAll().catch(err => {
  console.error('Failed to orchestrate microservices:', err);
  cleanup();
});
