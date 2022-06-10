import fs from 'fs';
import { getPathFromFile } from "./getPathFromFile.js";

export const cat = async (fileName) => {
    fileName = getPathFromFile(fileName);
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log('Operation failed');
        } else {
            console.log('Content of the file:');
            console.log('--------------------');
            console.log(data)
        };
    });
};

// export const cat = async (fileName) => {
//     await readFile(fileName);
// }