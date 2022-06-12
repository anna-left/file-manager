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
  const arrText = parseData(data);
  if (arrText.length > 3) {
    console.log('Invalid input');
    return;
  }
  const curCommand = arrText[0];
  const arg1 = arrText[1];
  const arg2 = arrText[2];
  switch (curCommand) {
    case '.exit':
      if (arg1) {
        console.log('Invalid input');
        break;
      }
      process.exit();
      break;
    case 'add':
      if (arg2) {
        console.log('Invalid input');
        break;
      }
      createFile(arg1);
      break;
    case 'os':
      if (arg2) {
        console.log('Invalid input');
        break;
      }
      getOsInfo(arg1);
      break;
    case 'up':
      if (arg1) {
        console.log('Invalid input');
        break;
      }
      getParentDirectory();
      break;
    case 'cd':
      if (arg2) {
        console.log('Invalid input');
        break;
      }
      getNewDirectory(arg1);
      break;
    case 'compress':
      compress(arg1, arg2);
      break;
    case 'decompress':
      decompress(arg1, arg2);
      break;
    case 'ls':
      if (arg1) {
        console.log('Invalid input');
        break;
      }
      list();
      break;
    case 'cat':
      if (arg2) {
        console.log('Invalid input');
        break;
      }
      await cat(arg1);
      break;
    case 'rn':
      rename(arg1, arg2);
      break;
    case 'cp':
      copy(arg1, arg2);
      break;
    case 'mv':
      await move(arg1, arg2);
      break;
    case 'rm':
      if (arg2) {
        console.log('Invalid input');
        break;
      }
      remove(arg1);
      break;
    case 'hash':
      if (arg2) {
        console.log('Invalid input');
        break;
      }
      calculateHash(arg1);
      break;
    default:
      console.log('Invalid input');
      break;
  }
}

function parseData(data) {
  data = data.toString().trim().replace(EOL, "");

  let index = data.indexOf('"');
  if (index === -1) {
    return data.split(" ");
  }

  const indexSpace = data.indexOf(' ');

  let arrText = [];
  arrText.push(data.slice(0, indexSpace));

  data = data.slice(indexSpace).trim();

  index = data.indexOf('"');
  if (index === 0) {
    arrText = arrText.concat(data.split('" '));
  } else {
    arrText = arrText.concat(data.split(' "'));
  }

  for (let i = 0; i < arrText.length; i++) {
    arrText[i] = arrText[i].trim().replace(/"/g, '');
  }
  return arrText;
}