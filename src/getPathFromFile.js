import { cwd } from 'node:process';
import path from 'path';
import { join } from 'path';

export const getPathFromFile = (fileName) => {

  if (!fileName) {
    return '';
  }

  if (!path.isAbsolute(fileName)) {
    fileName = join(cwd(), fileName);
  }

  return fileName;
}