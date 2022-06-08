import { EOL } from 'os';
import os from 'os';
import readline from 'readline';

import { STATE } from "./globalValues.js";
import { showWorkingDirectory } from "./showWorkingDirectory.js";
import { getParentDirectory } from "./getParentDirectory.js";
import { getChildrenDirectory } from "./getChildrenDirectory.js";
// import { createFile } from "./createFile.js";
import { getOsInfo } from "./getOsInfo.js";

export const start = async () => {
  const userNameString = process.argv[2];
  if (!userNameString.startsWith('--username=')) {
    console.log('Invalid input');
    return;
  }
  const userName = userNameString.replace('--username=', '');
  if (!userName) {
    console.log('Invalid input');
    return;
  }

  STATE.userName = userName;
  STATE.workingDirectory = os.homedir();

  console.log();
  console.log(`Welcome to the File Manager, ${STATE.userName}!`);
  showWorkingDirectory(import.meta.url);

  const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


  rlInterface.on('line', data => {
    const arrText = data.toString().trim().replace(EOL, "").split(" ");
    const curCommand = arrText[0];
    const curText1 = arrText[1];
    const curText2 = arrText[2];
    switch (curCommand) {
      case '.exit':
        process.exit();
        break;
      case 'add':
        // createFile(curText1);
        break;
        break;

      case 'os':
        getOsInfo(curText1);
        break;
      case 'up':
        getParentDirectory();
        break;
      case 'cd':
        getChildrenDirectory(curText1);
        break;
      // case ' ':
        
      //   break;
      // case value:
      //   break;
      // case value:
      //   break;
      // case value:
      //   break;
      default:
        console.log('Invalid input');
        break;
    }
    showWorkingDirectory(import.meta.url);
  }).on('close', () => {
    // console.log('exit');
    process.exit();
  });

  process.on('SIGINT', () => {
    process.exit();
  });
  process.on('exit', () => {
    console.log(`Thank you for using File Manager, ${STATE.userName}!${EOL}`);
  });


};

start();
