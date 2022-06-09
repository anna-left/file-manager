import fsPromise from 'fs/promises';
import fs from 'fs';
import path from 'path';
// import { fileURLToPath } from 'url'
// import { dirname } from 'path'

import { STATE } from "./globalValues.js";
// import { fsOperationFailed, sendMessage } from '../global/globalFunctions.js';

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)
// const folderName = path.join(__dirname, 'files');
// let counter = 0;

async function checkFolderExists() {
    try {
        const stat = await fsPromise.stat(STATE.workingDirectory);
        if (stat) {
            return true;
        }
    } catch (error) {
        return false;
    }
}

async function listFiles() {
    let counter = 0;
    fs.readdir(STATE.workingDirectory, (err, files) => {
        if (err) {
            console.log('Operation failed');
            return;
        } else {
            files.forEach(file => {
                let curFile = path.join(STATE.workingDirectory, file);

                fs.stat(curFile, function (err, stats) {
                    if (stats.isFile()) {
                        counter++;
                        console.log(`${counter}. ${path.basename(curFile)}`);
                    }
                })
            });
        }
    })

}

export const list = async () => {
    const folderExists = await checkFolderExists();
    if (folderExists) {
        await listFiles();
    } else {
        console.log('Operation failed');
        return;
    }
};
