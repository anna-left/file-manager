import { existsSync } from 'fs';
import { join } from 'path';
import path from 'path';

import { STATE } from "./globalValues.js";

export const getNewDirectory = (directoryName) => {
  if (existsSync(directoryName)) {
    STATE.workingDirectory = path.normalize(directoryName + '/');
  } else {
    const childrenDirectory = join(STATE.workingDirectory, directoryName);
    if (existsSync(childrenDirectory)) {
      STATE.workingDirectory = path.normalize(childrenDirectory);
    } else {
      console.log('Invalid input');
    }
  }
};