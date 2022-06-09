import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { join } from 'path';
import { existsSync } from 'fs';

import { STATE } from "./globalValues.js";
// import { getPathFromFile } from "./getPathFromFile.js";

export const compress = async (fileName, compressFileName) => {

  // fileName = await getPathFromFile(fileName);

  if (!fileName || !compressFileName) {
    console.log('Invalid input');
    return;
  }

  const parseFileName = path.parse(fileName)
  const pathIsAbsolute = path.isAbsolute(fileName);

  if (!parseFileName.dir || !pathIsAbsolute) {
    fileName = join(STATE.workingDirectory, fileName);
  }

  if (!existsSync(fileName)) {
    console.log('Operation failed');
    return;
  }

  const parseCompressFileName = path.parse(compressFileName)
  const compressPathIsAbsolute = path.isAbsolute(compressFileName);

  if (!parseCompressFileName.dir || !compressPathIsAbsolute) {
    compressFileName = join(STATE.workingDirectory, compressFileName);
  }
  
  const readStream = fs.createReadStream(fileName);
  const writeStream = fs.createWriteStream(compressFileName);

  const brotli = zlib.createBrotliCompress();

  try {
    readStream.pipe(brotli).pipe(writeStream);
  } catch (error) {
    console.log('Operation failed');
  }

  // const stream = readStream.pipe(brotli).pipe(writeStream);

  // stream.on('finish', () => {
  //   console.log('Done compressing 😎');
  // })
};