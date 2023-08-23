const os = require("os");

const userInfo = os.userInfo();
console.log(userInfo);

console.log(`system Uptime is ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  realease: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
