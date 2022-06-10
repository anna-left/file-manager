import fs from 'fs/promises';

export const createFile = async (fileName) => {
    await fs.writeFile(fileName, '', (err) => {
      if (err) console.log('Operation failed');;
    });

}
