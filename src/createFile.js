import fs from 'fs/promises';

import { showMessageOperationFailed } from "./globalValues.js";

export const createFile = async (fileName) => {
  await fs.writeFile(fileName, '', (err) => {
    if (err) showMessageOperationFailed();
  });

}
