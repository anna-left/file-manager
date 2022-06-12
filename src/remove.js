import { unlink } from 'fs';

import { getPathFromFile } from "./getPathFromFile.js";
import { showMessageOperationFailed } from "./globalValues.js";

export const remove = async (fileName) => {
    fileName = getPathFromFile(fileName);
    unlink(fileName, (err) => {
        if (err) showMessageOperationFailed();
    });
};

