import fs from 'fs';
import path from 'path';
import { join } from 'path';
import zlib from 'zlib';
import { existsSync } from 'fs';

import { getPathFromFile } from "./getPathFromFile.js";
import { showMessageOperationFailed } from "./globalValues.js";

export const decompress = (fileName, decompressFileName) => {

  fileName = getPathFromFile(fileName);
  decompressFileName = getPathFromFile(decompressFileName);

  if (!fileName || !decompressFileName) {
    showMessageOperationFailed();
    return;
  }

  if (!existsSync(fileName)) {
    showMessageOperationFailed();
    return;
  }

  const baseFileName = path.parse(fileName).base;
  const parseDecompressFileName = path.parse(decompressFileName);
  if (!parseDecompressFileName.base) {
    if (baseFileName.substring(baseFileName.length - 3) === '.br') {
      decompressFileName = join(parseDecompressFileName.dir, baseFileName.substring(0, baseFileName.length - 3));
    }

  }

  const readStream = fs.createReadStream(fileName);
  const writeStream = fs.createWriteStream(decompressFileName);

  readStream.on('error', () => {
    showMessageOperationFailed();
  });

  writeStream.on('error', () => {
    showMessageOperationFailed();
  });

  try {
    const brotli = zlib.createBrotliDecompress();
    readStream.pipe(brotli).pipe(writeStream);
  } catch (error) {
    showMessageOperationFailed();
  }

};