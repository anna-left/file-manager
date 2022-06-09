import fs from 'fs';
import path from 'path';
import { cwd } from 'node:process';

async function listFiles() {
    let counter = 0;
    fs.readdir(cwd(), (err, files) => {
        if (err) {
            console.log('Operation failed');
            return;
        } else {
            files.forEach(file => {
                let curFile = path.join(cwd(), file);

                fs.stat(curFile, function (err, stats) {
                    if (stats.isFile()) {
                        counter++;
                        console.log(`${counter}. ${path.basename(curFile)}`);
                    }
                })
            });
        }
    })

}

export const list = async () => {
    await listFiles();
};
