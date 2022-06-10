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

    const parseOldFile = path.parse(oldFileName);
    const parseNewFile = path.parse(newFileName);
    if (!parseNewFile.base) {
        newFileName = join(parseNewFile.dir, parseOldFile.base);
    }

    const readStream = fs.createReadStream(oldFileName);
    const writeStream = fs.createWriteStream(newFileName);

    readStream.on('close', function () {
        fs.unlink(oldFileName, (err) => {
            if (err) showMessageOperationFailed();
        });
    });

    try {
        readStream.pipe(writeStream);
    } catch (error) {
        showMessageOperationFailed();
    }
};

