let dataFromDate = require('./mkDataFromDate.js');
let dataFromDiskspace = require('./mkDataFromDiskspace.js');
let dataFromCPUUsage = require('./mkDataFromCPUUsage.js');
let dataFromUptime = require('./mkDataFromUptime.js');

let isTestMode = process.argv[2] === '--test';

dataFromDate(isTestMode);
dataFromDiskspace(isTestMode);
dataFromCPUUsage(isTestMode);
dataFromUptime(isTestMode);
