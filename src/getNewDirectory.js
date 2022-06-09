import { existsSync } from 'fs';
import { join } from 'path';
import path from 'path';

import { STATE } from "./globalValues.js";
import { getPathFromFile } from "./getPathFromFile.js";

export const getNewDirectory = (directoryName) => {
  directoryName = getPathFromFile(directoryName);
  if (existsSync(directoryName)) {
    STATE.workingDirectory = path.normalize(directoryName + '/');
  } else {
    console.log('Operation failed');
  }
  // if (existsSync(directoryName)) {
  //   STATE.workingDirectory = path.normalize(directoryName + '/');
  // } else {
  //   const childrenDirectory = join(STATE.workingDirectory, directoryName);
  //   if (existsSync(childrenDirectory)) {
  //     STATE.workingDirectory = path.normalize(childrenDirectory);
  //   } else {
  //     console.log('Operation failed');
  //   }
  // }
};