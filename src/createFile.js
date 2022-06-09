import fs from 'fs/promises';

export const createFile = async (fileName) => {
  try {
    await fs.writeFile(
      fileName,
      '',
      {
        encoding: "utf8",
        flag: "wx"
      },
    )
  } catch (error) {
    console.log('Operation failed');
  }
}
