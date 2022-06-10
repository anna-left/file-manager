import fs from 'fs';
import { EOL } from 'os';

import { getPathFromFile } from "./getPathFromFile.js";
import { showMessageOperationFailed } from "./globalValues.js";

export const cat = (fileName) => {
    fileName = getPathFromFile(fileName);

    const readStream = fs.createReadStream(fileName);

    return new Promise(function (resolve, reject) {
        readStream.on('data', chunk => { process.stdout.write(chunk) });
        readStream.on('end', () => {
            console.log(EOL);
            resolve();
        });
        readStream.on('error', () => {
            showMessageOperationFailed();
            resolve();
        });

    });

};
