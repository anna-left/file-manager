import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { STATE } from "./globalValues.js";

export const getParentDirectory = (url) => {
  STATE.workingDirectory = dirname(STATE.workingDirectory);
  console.log(STATE.workingDirectory);
};
