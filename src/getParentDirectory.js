import { dirname } from 'path';
import { chdir, cwd } from 'node:process';

export const getParentDirectory = () => {
  try {
    chdir(dirname(cwd()));
  } catch (error) {
    console.log('Operation failed');
  }
};
