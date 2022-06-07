import { EOL } from 'os';

import { STATE } from "./globalValues.js";

export const showWorkingDirectory = (url) => {
  const message = `You are currently in ${STATE.workingDirectory}`;
  const longLine = '-'.repeat(message.length + 12);
  const shortLine = '-'.repeat(5);
  console.log(`${longLine}${EOL}${shortLine} ${message} ${shortLine}${EOL}${longLine}`);
};