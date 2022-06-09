import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { join } from 'path';
import { existsSync } from 'fs';

import { STATE } from "./globalValues.js";
import { getPathFromFile } from "./getPathFromFile.js";

export const compress = (fileName, compressFileName) => {

  fileName = getPathFromFile(fileName);
  compressFileName = getPathFromFile(compressFileName);

  if (!fileName || !compressFileName) {
    console.log('Operation failed');
    return;
  }

  if (!existsSync(fileName)) {
    console.log('Operation failed');
    return;
  }

  const readStream = fs.createReadStream(fileName);
  const writeStream = fs.createWriteStream(compressFileName);

  const brotli = zlib.createBrotliCompress();

  try {
    readStream.pipe(brotli).pipe(writeStream);
  } catch (error) {
    console.log('Operation failed');
  }

};