const { execSync } = require('child_process');
const https = require('https');

const token = process.env.GITHUB_TOKEN; // set via environment variable
const username = 'dev-rushikesh2';
const repoName = 'backend-nukkadnow';

function createRepo() {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      name: repoName,
      description: 'NukkadNow Backend Microservices Monorepo',
      private: false,
      auto_init: false
    });

    const options = {
      hostname: 'api.github.com',
      path: '/user/repos',
      method: 'POST',
      headers: {
        'User-Agent': 'NodeJS-Script',
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        console.log(`Create Repo HTTP Status: ${res.statusCode}`);
        try {
          const json = JSON.parse(body);
          resolve({ status: res.statusCode, body: json });
        } catch (e) {
          resolve({ status: res.statusCode, body });
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function main() {
  console.log('Ensuring GitHub repository exists...');
  const res = await createRepo();
  if (res.status === 201) {
    console.log('Repository created successfully on GitHub!');
  } else if (res.status === 422) {
    console.log('Repository already exists or name taken.');
  } else {
    console.log('API Response:', res.body);
  }

  const git = 'C:\\Users\\rushi\\AppData\\Local\\Programs\\Git\\cmd\\git.exe';
  const remoteWithAuth = `https://${username}:${token}@github.com/${username}/${repoName}.git`;

  console.log('Pushing main branch to GitHub...');
  const pushOut = execSync(`"${git}" push -u "${remoteWithAuth}" main:main --force`, {
    cwd: 'C:\\Nukkadnow\\backend',
    encoding: 'utf8'
  });
  console.log(pushOut);

  console.log('Setting clean origin URL (without embedded token in git config)...');
  execSync(`"${git}" remote set-url origin https://github.com/${username}/${repoName}.git`, {
    cwd: 'C:\\Nukkadnow\\backend'
  });
  console.log('Done! Successfully pushed to https://github.com/' + username + '/' + repoName);
}

main().catch(err => {
  console.error('Error during push:', err.message);
  if (err.stdout) console.log('stdout:', err.stdout);
  if (err.stderr) console.error('stderr:', err.stderr);
  process.exit(1);
});
