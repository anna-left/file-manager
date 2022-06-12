import { EOL } from 'os';
import { cwd } from 'node:process';

export const showWorkingDirectory = () => {
  const message = `You are currently in ${cwd()}`;
  const longLine = '-'.repeat(message.length + 12);
  const shortLine = '-'.repeat(5);
  console.log(`${longLine}${EOL}${shortLine} ${message} ${shortLine}${EOL}${longLine}`);
};