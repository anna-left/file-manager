import { cwd } from 'node:process';
import fs from 'fs';
import path from 'path';

export const list = () => {
  const arrFiles = fs.readdirSync(cwd())
    .map(file => {
      const stat = fs.statSync(path.join(cwd(), file));
      return {
        file, isDirectory: stat.isDirectory(), size: stat.size
      }
    })
  console.table(arrFiles)
}