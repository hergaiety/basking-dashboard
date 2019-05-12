var static = require('node-static');

var fileServer = new static.Server('./public');

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    fileServer.serve(request, response);
  }).resume();
}).listen(8080);

console.log('Serving on http://localhost:8080');
console.log('Should be proxied to https://basking.wroten.me/');
