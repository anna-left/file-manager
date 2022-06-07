import { EOL } from 'os';
import os from 'os';

import { showWorkingDirectory } from "./showWorkingDirectory.js";
import { STATE } from "./globalValues.js";

export const start = () => {
  const userNameString = process.argv[2];

  if (!userNameString.startsWith('--username=')) {
    return;
  }

  STATE.userName = userNameString.replace('--username=', '');
  STATE.workingDirectory = os.homedir();

  console.log();
  console.log(`Welcome to the File Manager, ${STATE.userName}!`);
  showWorkingDirectory(import.meta.url);

  process.stdin.on('data', data => {
    let curText = data.toString().trim().replace(EOL, "");
    if (curText.toUpperCase() === '.EXIT') {
      process.exit();
    } else {

    }
  });

  process.on('SIGINT', () => {
    process.exit();
  });
  process.on('exit', () => {
    console.log(`Thank you for using File Manager, ${STATE.userName}!${EOL}`);

  });

  // const { stdin, stdout } = process;
  // stdout.write('\n*** Пожалуста, введите ваши данные:\n');
  // let resText = '';
  // stdin.on('data', data => {
  //   let curText = data.toString();
  //   if (curText.trim().replace(/(^\s+|\s+$)/g, "").toUpperCase() === 'EXIT') {
  //     process.exit();
  //   } else {
  //     resText += curText;
  //     output.write(curText);
  //   }

  // });
  
};

start();
