import { existsSync } from 'fs';
import { join } from 'path';
import { STATE } from "./globalValues.js";

export const getChildrenDirectory = (directoryName) => {
  const сhildrenDirectory = join(STATE.workingDirectory, directoryName);
  if (existsSync(сhildrenDirectory)) {
    STATE.workingDirectory = сhildrenDirectory;
  } else {
    console.log('Invalid input');
  }
};