import { EOL } from 'os';
import os from 'os';
import readline from 'readline';
import { chdir } from 'node:process';

import { showWorkingDirectory } from "./showWorkingDirectory.js";
import { processСommands } from './processСommands.js';

export const start = async () => {
  const userNameString = process.argv[2];
  if (!userNameString || !userNameString.startsWith('--username=')) {
    console.log('Invalid input');
    return;
  }
  const userName = userNameString.replace('--username=', '');
  if (!userName) {
    console.log('Invalid input');
    return;
  }

  chdir(os.homedir());

  console.log();
  console.log(`Welcome to the File Manager, ${userName}!`);
  showWorkingDirectory(import.meta.url);

  const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rlInterface.on('line', async (data) => {
    await processСommands(data);

    showWorkingDirectory();
  }).on('close', () => {
    process.exit();
  });

  process.on('SIGINT', () => {
    process.exit();
  });
  process.on('exit', () => {
    console.log(`Thank you for using File Manager, ${userName}!${EOL}`);
  });

};

start();
