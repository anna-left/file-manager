import { cwd } from 'node:process';
import fs from 'fs';
import path from 'path';

import { showMessageOperationFailed } from "./globalValues.js";

export const list = () => {
  try {
    const arrFiles = fs.readdirSync(cwd())
      .map(file => {
        try {
          const stat = fs.statSync(path.join(cwd(), file));
          return {
            file, isDirectory: stat.isDirectory(), size: stat.size
          }
          
        } catch (error) {
          return {
            file, isDirectory: '', size: ''
          }
        }
      })
    console.table(arrFiles)
  } catch (error) {
    showMessageOperationFailed();
  }
}