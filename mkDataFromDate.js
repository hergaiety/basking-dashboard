const fs = require('fs');
const path = require('path');

module.exports = async function(useTestData = false) {
  fs.readFile(path.join(__dirname, 'data/raw', useTestData ? 'test' : 'real', 'date.raw'), 'utf8', (err, date) => {
    if (err || !date.length) {
      console.error(err);
      process.exit(1);
    }
    date = new Date(date.slice(0, date.length - 1));
    let jsonString = JSON.stringify({
      raw: date,
      pretty: date.toDateString(),
    });

    fs.writeFile(path.join(__dirname, 'data/json', 'date.json'), jsonString, err => {
      if (err) throw err;
    });
  });
}

