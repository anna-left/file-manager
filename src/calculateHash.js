import crypto from 'crypto';
import fs from 'fs';

import { showMessageOperationFailed } from "./globalValues.js";

export const calculateHash = async (fileName) => {

    try {
        const fileBuffer = fs.readFileSync(fileName);
        const hashSum = crypto.createHash('sha256');
        hashSum.update(fileBuffer);

        const hex = hashSum.digest('hex');

        console.log(hex);
    } catch (error) {
        showMessageOperationFailed();
    }

};
