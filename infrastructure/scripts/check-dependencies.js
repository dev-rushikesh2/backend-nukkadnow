const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, '..', '..', 'apps');
const apps = fs.readdirSync(appsDir).filter(name => fs.statSync(path.join(appsDir, name)).isDirectory());

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(getFiles(full));
    } else if (full.endsWith('.ts')) {
      results.push(full);
    }
  }
  return results;
}

const missingByApp = {};

for (const app of apps) {
  const pkgJsonPath = path.join(appsDir, app, 'package.json');
  if (!fs.existsSync(pkgJsonPath)) continue;
  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
  const deps = new Set([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
    // built-in node modules
    'fs', 'path', 'crypto', 'http', 'https', 'stream', 'util', 'os', 'events', 'net', 'url', 'buffer'
  ]);

  const srcDir = path.join(appsDir, app, 'src');
  if (!fs.existsSync(srcDir)) continue;
  const files = getFiles(srcDir);
  const missing = new Set();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.matchAll(/(?:import|from)\s+['"]([^'.][^'"]*)['"]/g);
    for (const m of matches) {
      let mod = m[1];
      if (mod.startsWith('@')) {
        const parts = mod.split('/');
        mod = parts[0] + '/' + parts[1];
      } else {
        mod = mod.split('/')[0];
      }
      if (!deps.has(mod)) {
        missing.add(mod);
      }
    }
  }
  if (missing.size > 0) {
    missingByApp[app] = Array.from(missing);
  }
}

console.log(JSON.stringify(missingByApp, null, 2));
