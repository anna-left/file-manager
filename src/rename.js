import { rename as renameFS } from 'fs'; 
import { getPathFromFile } from "./getPathFromFile.js";

export const rename = async (oldFileName, newFileName) => {
    oldFileName = getPathFromFile(oldFileName);
    newFileName = getPathFromFile(newFileName);
        renameFS(oldFileName, newFileName, (err) => {
            if (err) console.log('Operation failed');
        });
};
