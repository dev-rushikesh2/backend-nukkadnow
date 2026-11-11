const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetDir = 'C:\\Users\\rushi\\AppData\\Local\\Programs\\Git';
const zipPath = path.join(targetDir, 'mingit.zip');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Downloading MinGit (Git for Windows)...');
execSync(`curl.exe -L -o "${zipPath}" "https://github.com/git-for-windows/git/releases/download/v2.47.1.windows.1/MinGit-2.47.1-64-bit.zip"`, { stdio: 'inherit' });

console.log('Extracting MinGit...');
execSync(`tar.exe -xf "${zipPath}" -C "${targetDir}"`, { stdio: 'inherit' });

if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

const gitCmd = path.join(targetDir, 'cmd', 'git.exe');
console.log('Verifying git at:', gitCmd);
const ver = execSync(`"${gitCmd}" --version`, { encoding: 'utf8' });
console.log('Git version installed:', ver.trim());

// Permanently add to user PATH via setx or HKCU registry
try {
  const currentPath = execSync('reg query HKCU\\Environment /v Path', { encoding: 'utf8' });
  const match = currentPath.match(/REG_\w+\s+(.*)/);
  const oldPath = match ? match[1].trim() : '';
  const newGitPath = path.join(targetDir, 'cmd');
  if (!oldPath.includes(newGitPath)) {
    const updatedPath = `${oldPath};${newGitPath}`;
    execSync(`reg add HKCU\\Environment /v Path /t REG_EXPAND_SZ /d "${updatedPath}" /f`, { stdio: 'inherit' });
    console.log('Added Git to user PATH permanently!');
  }
} catch (e) {
  console.log('Note on PATH update:', e.message);
}
