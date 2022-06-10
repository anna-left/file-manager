import { EOL } from 'os';

import { getParentDirectory } from "./getParentDirectory.js";
import { getNewDirectory } from "./getNewDirectory.js";
import { createFile } from "./createFile.js";
import { getOsInfo } from "./getOsInfo.js";
import { compress } from "./compress.js";
import { decompress } from "./decompress.js";
import { list } from "./list.js";
import { cat } from "./cat.js";
import { rename } from "./rename.js";
import { copy } from './copy.js';
import { move } from './move.js';
import { remove } from './remove.js';
import { calculateHash } from './calculateHash.js';

export const processСommands = async (data) => {
  const arrText = data.toString().trim().replace(EOL, "").split(" ");
  if (arrText.length > 3) {
    console.log('Invalid input');
    return;
  }
  const curCommand = arrText[0];
  const curText1 = arrText[1];
  const curText2 = arrText[2];
  switch (curCommand) {
    case '.exit':
      if (curText1) {
        console.log('Invalid input');
        break;
      }
      process.exit();
      break;
    case 'add':
      if (curText2) {
        console.log('Invalid input');
        break;
      }
      createFile(curText1);
      break;
    case 'os':
      if (curText2) {
        console.log('Invalid input');
        break;
      }
      getOsInfo(curText1);
      break;
    case 'up':
      if (curText1) {
        console.log('Invalid input');
        break;
      }
      getParentDirectory();
      break;
    case 'cd':
      if (curText2) {
        console.log('Invalid input');
        break;
      }
      getNewDirectory(curText1);
      break;
    case 'compress':
      compress(curText1, curText2);
      break;
    case 'decompress':
      decompress(curText1, curText2);
      break;
    case 'ls':
      if (curText1) {
        console.log('Invalid input');
        break;
      }
      list();
      break;
    case 'cat':
      if (curText2) {
        console.log('Invalid input');
        break;
      }
      await cat(curText1);
      break;
    case 'rn':
      rename(curText1, curText2);
      break;
    case 'cp':
      copy(curText1, curText2);
      break;
    case 'mv':
      move(curText1, curText2);
      break;
    case 'rm':
      if (curText2) {
        console.log('Invalid input');
        break;
      }
      remove(curText1);
      break;
    case 'hash':
      if (curText2) {
        console.log('Invalid input');
        break;
      } 
      calculateHash(curText1);
      break;
    // case '':
    //   break;
    // case '':
    //   break;
    default:
      console.log('Invalid input');
      break;
  }
}