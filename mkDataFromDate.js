const fs = require('fs');
const path = require('path');

module.exports = async function() {
  fs.readFile(path.join(__dirname, 'data/raw/real', 'date.raw'), 'utf8', (err, date) => {
    if (err || !date.length) {
      console.error(err);
      process.exit(1);
    }
    date = new Date(date.slice(0, date.length - 1));
    let jsonString = JSON.stringify({
      raw: date,
      pretty: date.toDateString(),
    });

    fs.writeFile(path.join(__dirname, 'data/json/real', 'date.json'), jsonString, err => {
      if (err) throw err;
    });
  });
}

