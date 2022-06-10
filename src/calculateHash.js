import crypto from 'crypto';
import fs from 'fs';

export const calculateHash = async (fileName) => {

    const fileBuffer = fs.readFileSync(fileName);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    console.log(hex); 
};
