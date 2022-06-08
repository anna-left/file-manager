import os from 'os';
import { EOL } from 'os';

function getOsInfo(userInfoProperty) {
  switch (userInfoProperty) {
    case '--username':
      console.log(os.userInfo().username);
      break;
    case '--EOL':
      console.log(EOL);
      break;
    case '--cpus':
      console.log(`overall amount of CPUS : ${os.cpus().length}`);
      os.cpus().forEach(cpu => {
        console.log(`model: ${cpu.model}; clock rate: ${cpu.speed / 1000}GHz`);
      });
      break;
    case '--homedir':
      console.log(os.homedir());
      break;
    case '--architecture':
      console.log(process.arch);
      break;
    default:
      console.log('Invalid input');
      break;
  }
}

export { getOsInfo };
