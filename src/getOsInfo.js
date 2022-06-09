import os from 'os';

function getOsInfo(osInfoProperty) {
  switch (osInfoProperty) {
    case '--username':
      console.log(os.userInfo().username);
      break;
    case '--EOL':
      console.log(JSON.stringify(os.EOL));
      break;
    case '--cpus':
      console.log(`overall amount of CPUS : ${os.cpus().length}`);
      const arrCpus = [];
      os.cpus().forEach(cpu => {
        const objectCpu = {'model': cpu.model, 'clock rate': `${cpu.speed / 1000} GHz`};
        arrCpus.push(objectCpu);
      });
      console.table(arrCpus);
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
