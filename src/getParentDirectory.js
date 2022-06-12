import { dirname } from 'path';
import { chdir, cwd } from 'node:process';

import { showMessageOperationFailed } from './globalValues.js';

export const getParentDirectory = () => {
  try {
    chdir(dirname(cwd()));
  } catch (error) {
    showMessageOperationFailed();
  }
};
