const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const candidates = [
  'C:\\Program Files\\Git\\cmd\\git.exe',
  'C:\\Program Files\\Git\\bin\\git.exe',
  'C:\\Program Files (x86)\\Git\\cmd\\git.exe',
  'C:\\Program Files (x86)\\Git\\bin\\git.exe',
  'C:\\Users\\rushi\\AppData\\Local\\Programs\\Git\\cmd\\git.exe',
  'C:\\Users\\rushi\\AppData\\Local\\Programs\\Git\\bin\\git.exe',
  'C:\\Git\\cmd\\git.exe',
  'C:\\Git\\bin\\git.exe',
];

for (const c of candidates) {
  if (fs.existsSync(c)) {
    console.log('FOUND GIT AT:', c);
    process.exit(0);
  }
}

try {
  const regOut = execSync('reg query "HKLM\\Software\\GitForWindows" /v InstallPath', { encoding: 'utf8' });
  console.log('REGISTRY HKLM:', regOut);
} catch (e) {}

try {
  const regOut2 = execSync('reg query "HKCU\\Software\\GitForWindows" /v InstallPath', { encoding: 'utf8' });
  console.log('REGISTRY HKCU:', regOut2);
} catch (e) {}

console.log('Git search completed.');
