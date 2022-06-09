import fs from 'fs';
import path from 'path';
import { join } from 'path';

import { STATE } from "./globalValues.js";

export const getPathFromFile = (fileName) => {

  if (!fileName) {
    return '';
  }

  const parseFileName = path.parse(fileName)
  const pathIsAbsolute = path.isAbsolute(fileName);
  
  if (!parseFileName.dir || !pathIsAbsolute) {
    fileName = join(STATE.workingDirectory, fileName);
  }

  return fileName;
}



// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// export const getPathFromFile = (url, fileName='') => {
//   const __dirname = dirname(fileURLToPath(url));
//   return join(__dirname, fileName);
// }