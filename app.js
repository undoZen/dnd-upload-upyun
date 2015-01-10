#!/usr/bin/env node
var http = require('http');
var multiParty = require('connect-multiparty');
var fs = require('fs');
var UPYun = require('./upyun').UPYun;
var config;

var homeConfigPath = process.env.HOME + '/.dnd-upload-upyun.json'
try {
  config = JSON.parse(fs.readFileSync(homeConfigPath));
} catch (e) {
  console.log('please place a config file at ' + homeConfigPath +
  ' like: \n' + fs.readFileSync(__dirname + '/config.sample.json', 'utf-8'));
  process.exit(0);
}

var upyun = new UPYun(config.bucketname, config.username, config.password);

var server = http.createServer(function (req, res) {
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
}).listen(function () {
  console.log('server listening: http://127.0.0.1:' + server.address().port);
});
