const fs = require('fs');
const path = require('path');

module.exports = async function(useTestData = false) {
  fs.readFile(path.join(__dirname, 'data/raw', useTestData ? 'test' : 'real', 'cpuusage.raw'), 'utf8', (err, usage) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    let jsonString = JSON.stringify({
      str: usage,
      num: parseFloat(usage.slice(0, usage.length -1)),
    });

    fs.writeFile(path.join(__dirname, 'data/json', 'cpuusage.json'), jsonString, err => {
      if (err) throw err;
    });
  });
}

