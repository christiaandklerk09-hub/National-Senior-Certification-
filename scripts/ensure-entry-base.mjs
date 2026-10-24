import fs from 'fs';
import path from 'path';

const targetCjs = 'node_modules/next/dist/server/app-render/entry-base.js';
const targetEsm = 'node_modules/next/dist/esm/server/app-render/entry-base.js';
const backupFile = 'scripts/entry-base-backup.js';

if (fs.existsSync(backupFile)) {
  const content = fs.readFileSync(backupFile);
  fs.mkdirSync(path.dirname(targetCjs), { recursive: true });
  fs.writeFileSync(targetCjs, content);
}

// Remove problematic ESM stub if present so Webpack resolves CJS properly
if (fs.existsSync(targetEsm)) {
  fs.unlinkSync(targetEsm);
}
