const fs = require('fs');
const path = require('path');

module.exports = async function(useTestData = false) {
  fs.readFile(path.join(__dirname, 'data/raw', useTestData ? 'test' : 'real', 'diskspace.raw'), 'utf8', (err, diskspace) => {
    if (err || !diskspace.length) {
      console.error(err);
      process.exit(1);
    }

    let diskspaceData = diskspace.split(' ').filter(str => str.length);
    let [ partitionName, size, used, avail, capacity ] = diskspaceData;

    let jsonString = JSON.stringify({
      partitionName,
      size,
      used,
      avail,
      capacity,
    });

    fs.writeFile(path.join(__dirname, 'data/json/real', 'diskspace.json'), jsonString, err => {
      if (err) throw err;
    });
  });
}

