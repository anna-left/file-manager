import { existsSync } from 'fs';
import { chdir } from 'node:process';

import { getPathFromFile } from "./getPathFromFile.js";
import { showMessageOperationFailed } from "./globalValues.js";

export const getNewDirectory = (directoryName) => {
  directoryName = getPathFromFile(directoryName);
  if (existsSync(directoryName)) {
    chdir(directoryName);
  } else {
    showMessageOperationFailed();
  }
};