const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, '..', '..', 'apps');
const apps = fs.readdirSync(appsDir).filter(name => fs.statSync(path.join(appsDir, name)).isDirectory());

function getTsFiles(dir) {
  let res = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      if (item !== 'node_modules' && item !== 'dist') {
        res = res.concat(getTsFiles(full));
      }
    } else if (full.endsWith('.ts')) {
      res.push(full);
    }
  }
  return res;
}

let fixCount = 0;

for (const app of apps) {
  const srcDir = path.join(appsDir, app, 'src');
  if (!fs.existsSync(srcDir)) continue;
  const files = getTsFiles(srcDir);

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    const dir = path.dirname(file);

    content = content.replace(/(from\s+['"])(\.\.[^'"]+)(['"])/g, (match, prefix, relPath, suffix) => {
      const candidates = [
        path.resolve(dir, relPath),
        path.resolve(dir, relPath + '.ts'),
        path.resolve(dir, relPath + '.d.ts'),
        path.resolve(dir, relPath, 'index.ts'),
        path.resolve(dir, relPath + '.js')
      ];
      if (candidates.some(p => fs.existsSync(p))) {
        return match; // already valid
      }

      // Try searching for the basename in the module folder
      const targetBase = path.basename(relPath);
      // Search files in srcDir matching targetBase + '.ts' or targetBase
      const matching = files.find(f => {
        const bn = path.basename(f, '.ts');
        return bn === targetBase || path.basename(f) === targetBase;
      });

      if (matching) {
        let newRel = path.relative(dir, matching).replace(/\\/g, '/');
        if (newRel.endsWith('.ts')) newRel = newRel.slice(0, -3);
        if (!newRel.startsWith('.')) newRel = './' + newRel;
        console.log(`Re-resolved import in ${path.relative(appsDir, file)}: ${relPath} -> ${newRel}`);
        changed = true;
        fixCount++;
        return `${prefix}${newRel}${suffix}`;
      }

      return match;
    });

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
    }
  }
}

console.log(`Smart import fixes applied: ${fixCount}`);
