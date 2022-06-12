import fs from 'fs';
import path from 'path';
import { join } from 'path';

import { getPathFromFile } from "./getPathFromFile.js";
import { showMessageOperationFailed } from "./globalValues.js";

export const copy = async (oldFileName, newFileName) => {
    if (!oldFileName || !newFileName) {
        showMessageOperationFailed();
        return;
    }
    oldFileName = getPathFromFile(oldFileName);
    newFileName = getPathFromFile(newFileName);

    newFileName = join(newFileName, path.parse(oldFileName).base);

    const readStream = fs.createReadStream(oldFileName);
    readStream.on('error', () => {
        showMessageOperationFailed();
        readStream.destroy();
        return;
    });

    const writeStream = fs.createWriteStream(newFileName);
    writeStream.on('error', () => {
        showMessageOperationFailed();
        writeStream.destroy();
        return;
    });

    try {
        readStream.pipe(writeStream);
    } catch (error) {
        showMessageOperationFailed();
    }
    readStream.destroy();
    writeStream.destroy();
};

