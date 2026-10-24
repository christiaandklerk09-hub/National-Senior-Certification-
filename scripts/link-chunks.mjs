import fs from 'fs';
import path from 'path';

const dirs = [
  '.next/static/chunks/app',
  '.next/standalone/.next/static/chunks/app'
];

for (const dir of dirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // 1. Copy hashed production chunks to unhashed names (reliable across all environments)
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.includes('-') && file.endsWith('.js')) {
        const parts = file.split('-');
        const baseName = parts.slice(0, -1).join('-') + '.js';
        const sourcePath = path.join(dir, file);
        const targetPath = path.join(dir, baseName);
        try {
          fs.copyFileSync(sourcePath, targetPath);
        } catch {
          // continue
        }
      }
    }
  } catch {
    // continue
  }

  // 2. Ensure fallback error stubs exist with valid module functions if missing
  const errorFile = path.join(dir, 'error.js');
  const globalErrorFile = path.join(dir, 'global-error.js');
  const notFoundFile = path.join(dir, 'not-found.js');

  const validStub = (chunkId, modId) =>
    `"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[${chunkId}],{${modId}:function(e,t,n){"use strict";n.r(t);n.d(t,{default:function(){return function(){return null}}})}}]);\n`;

  if (!fs.existsSync(errorFile)) {
    fs.writeFileSync(errorFile, validStub(705, 705));
  }
  if (!fs.existsSync(globalErrorFile)) {
    fs.writeFileSync(globalErrorFile, validStub(706, 706));
  }
  if (!fs.existsSync(notFoundFile)) {
    fs.writeFileSync(notFoundFile, validStub(707, 707));
  }
}
