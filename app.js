var http = require('http');
var multiParty = require('connect-multiparty');
var fs = require('fs');
var UPYun = require('./upyun').UPYun;
var config = require('./config.json');

var upyun = new UPYun(config.bucketname, config.username, config.password);

http.createServer(function (req, res) {
  if (req.url != '/upload') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream('./index.html').pipe(res);
  } else multiParty()(req, res, function () {
  console.log(req);
  upyun.writeFile(req.body.path, fs.readFileSync(req.files.file.path), true, function (err, res) {
    console.log(err||res);
  }, { headers: { 'Content-Type': req.files.file.type }});
  res.end('ok');
  });
}).listen(8080);
