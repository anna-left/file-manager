import fs from 'fs';

import { showMessageOperationFailed } from "./globalValues.js";

export const createFile = async (fileName) => {
  const writeStream = fs.createWriteStream(fileName);
  writeStream.on('error', () => {
    showMessageOperationFailed();
  });
  try {
    writeStream.write('');
  } catch (error) {
    showMessageOperationFailed();
  }
}
