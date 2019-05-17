const fs = require('fs');
const path = require('path');
const moment = require('moment');

module.exports = async function(useTestData = false) {
  fs.readFile(path.join(__dirname, 'data/raw', useTestData ? 'test' : 'real', 'uptime.raw'), 'utf8', (err, uptime) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    let jsonString = JSON.stringify({
      uptime: moment(uptime, 'YYYY-MM-DD HH:mm:ss').format('hh:mm MM-DD-YYYY'),
    });

    fs.writeFile(path.join(__dirname, 'data/json', 'uptime.json'), jsonString, err => {
      if (err) throw err;
    });
  });
}

