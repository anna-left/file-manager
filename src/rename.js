import { rename as renameFS } from 'fs';

import { getPathFromFile } from "./getPathFromFile.js";
import { showMessageOperationFailed } from "./globalValues.js";

export const rename = async (oldFileName, newFileName) => {
    oldFileName = getPathFromFile(oldFileName);
    newFileName = getPathFromFile(newFileName);
    renameFS(oldFileName, newFileName, (err) => {
        if (err) showMessageOperationFailed();
    });
};
