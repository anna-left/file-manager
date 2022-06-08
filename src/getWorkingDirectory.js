import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const getWorkingDirectory = (url) => {
  const __filename = fileURLToPath(url);
  return dirname(__filename);
}