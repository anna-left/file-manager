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

    const parseOldFile = path.parse(oldFileName);
    const parseNewFile = path.parse(newFileName);
    if (!parseNewFile.base) {
        newFileName = join(parseNewFile.dir, parseOldFile.base);
    }

    const readStream = fs.createReadStream(oldFileName);
    readStream.on('error', () => {
        showMessageOperationFailed();
        return;
    });

    const writeStream = fs.createWriteStream(newFileName);
    writeStream.on('error', () => {
        showMessageOperationFailed();
        return;
    });

    try {
        readStream.pipe(writeStream);
    } catch (error) {
        showMessageOperationFailed();
    }
};

