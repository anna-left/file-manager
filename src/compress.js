import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { join } from 'path';
import { existsSync } from 'fs';

import { getPathFromFile } from "./getPathFromFile.js";
import { showMessageOperationFailed } from "./globalValues.js";

export const compress = (fileName, compressFileName) => {

  fileName = getPathFromFile(fileName);
  compressFileName = getPathFromFile(compressFileName);

  if (!fileName || !compressFileName) {
    showMessageOperationFailed();
    return;
  }

  if (!existsSync(fileName)) {
    showMessageOperationFailed();
    return;
  }

  compressFileName = join(compressFileName, `${path.parse(fileName).base}.br`);

  const readStream = fs.createReadStream(fileName);
  const writeStream = fs.createWriteStream(compressFileName);

  readStream.on('error', () => {
    showMessageOperationFailed();
  });

  writeStream.on('error', () => {
    showMessageOperationFailed();
  });

  try {
    const brotli = zlib.createBrotliCompress();
    readStream.pipe(brotli).pipe(writeStream);
  } catch (error) {
    showMessageOperationFailed();
  }

};