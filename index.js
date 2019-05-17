const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const apiPrefix = '/api';
const port = 8080;

app.use(express.static(path.join(__dirname + '/public'), {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['html'],
  maxAge: '1d',
  redirect: false,
  setHeaders: (res, path, stat) => {
    res.set('x-timestamp', Date.now());
  },
}));

app.listen(port, () => {
  console.log(`Serving on http://localhost:${port}`);
  console.log('Should be proxied to https://basking.wroten.me/');
});

app.route(apiPrefix + '/builddate').get((req, res) => {
  fs.readFile(path.join(__dirname, 'data/json', 'date.json'), 'utf8', (err, json) => {
    if (err) { throw new Error(err); }
    res.json(JSON.parse(json));
  });
});

app.route(apiPrefix + '/diskspace').get((req, res) => {
  fs.readFile(path.join(__dirname, 'data/json', 'diskspace.json'), 'utf8', (err, json) => {
    if (err) { throw new Error(err); }
    res.json(JSON.parse(json));
  });
});

app.route(apiPrefix + '/cpuusage').get((req, res) => {
  fs.readFile(path.join(__dirname, 'data/json', 'cpuusage.json'), 'utf8', (err, json) => {
    if (err) { throw new Error(err); }
    res.json(JSON.parse(json));
  });
});

