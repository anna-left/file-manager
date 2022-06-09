import { dirname } from 'path';

import { STATE } from "./globalValues.js";

export const getParentDirectory = () => {
  STATE.workingDirectory = dirname(STATE.workingDirectory);
  console.log(STATE.workingDirectory);
};
