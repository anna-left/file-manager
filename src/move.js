import fs from 'fs';
import path from 'path';
import { join } from 'path';

import { getPathFromFile } from "./getPathFromFile.js";
import { showMessageOperationFailed } from "./globalValues.js";

export const move = async (oldFileName, newFileName) => {
    if (!oldFileName || !newFileName) {
        showMessageOperationFailed();
        return;
    }
    oldFileName = getPathFromFile(oldFileName);
    newFileName = getPathFromFile(newFileName);

    newFileName = join(newFileName, path.parse(oldFileName).base);
    
    const readStream = fs.createReadStream(oldFileName);
    const writeStream = fs.createWriteStream(newFileName);

    return new Promise(function (resolve, reject) {

        readStream.on('error', () => {
            showMessageOperationFailed();
            readStream.destroy();
            resolve();
        });
        writeStream.on('error', () => {
            showMessageOperationFailed();
            writeStream.destroy();
            resolve();
        });

        readStream.on('close', function () {
            fs.unlink(oldFileName, (err) => {
                if (err) showMessageOperationFailed();
                resolve();
            });
        });

        readStream.pipe(writeStream);
        readStream.on('end', () => resolve());
        readStream.destroy();
        writeStream.destroy();
    });
};

