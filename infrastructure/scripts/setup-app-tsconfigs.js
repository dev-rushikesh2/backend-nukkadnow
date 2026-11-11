const fs = require('fs');
const path = require('path');

const appsDir = path.join(__dirname, '..', '..', 'apps');
const apps = fs.readdirSync(appsDir).filter(name => {
  return fs.statSync(path.join(appsDir, name)).isDirectory();
});

const tsConfig = {
  extends: "../../tsconfig.base.json",
  compilerOptions: {
    outDir: "./dist"
  },
  include: ["src/**/*"]
};

const tsBuild = {
  extends: "./tsconfig.json",
  exclude: ["node_modules", "test", "dist", "**/*spec.ts"]
};

for (const app of apps) {
  const dir = path.join(appsDir, app);
  fs.writeFileSync(path.join(dir, 'tsconfig.json'), JSON.stringify(tsConfig, null, 2));
  fs.writeFileSync(path.join(dir, 'tsconfig.build.json'), JSON.stringify(tsBuild, null, 2));
  console.log(`Configured tsconfig for ${app}`);
}
