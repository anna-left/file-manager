import { existsSync } from 'fs';
import { chdir } from 'node:process';

import { getPathFromFile } from "./getPathFromFile.js";

export const getNewDirectory = (directoryName) => {
  directoryName = getPathFromFile(directoryName);
  if (existsSync(directoryName)) {
    chdir(directoryName);
  } else {
    console.log('Operation failed');
  }
};