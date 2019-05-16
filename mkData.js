let dataFromDate = require('./mkDataFromDate.js');
let dataFromDiskspace = require('./mkDataFromDiskspace.js');

let isTestMode = process.argv[2] === '--test';

dataFromDate(isTestMode);
dataFromDiskspace(isTestMode);
