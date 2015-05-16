#!/usr/bin/env node
var http = require('http');
var multiParty = require('connect-multiparty');
var fs = require('fs');
var uuid = require('uuid');
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

var indexSrc = fs.readFileSync(__dirname + '/index.html', 'utf8')
.replace('__BUCKET_NAME__', config.bucketname)
.replace('"__GENERATE_PATH__"', config.generatePath ? 'true' : 'false')

var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(indexSrc);
  } else if (req.url === '/upload') multiParty()(req, res, function () {
  var filePath = req.body.path;
  if (config.generatePath || filePath || filePath === '/') filePath = '/' + uuid.v4();
  console.log('fp', filePath);
  upyun.writeFile(filePath, fs.readFileSync(req.files.file.path), true, function (err, res) {
    console.log(err||res);
  }, { headers: { 'Content-Type': req.files.file.type }});
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({filePath: filePath}));
  });
  else {
      res.statusCode = 404;
      res.end('not found');
  }
}).listen(function () {
  console.log('server listening: http://127.0.0.1:' + server.address().port);
});
