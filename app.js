var connect = require('connect');
var fs = require('fs');
var UPYun = require('./upyun').UPYun;
var config = require('./config.json');

var app = connect();
var upyun = new UPYun(config.bucketname, config.username, config.password);

app.use(connect.bodyParser());
app.use(function (req, res, next) {
  if (req.url != '/upload') return next();
  console.log(req);
  upyun.writeFile(req.body.path, fs.readFileSync(req.files.file.path), true, function (err, res) {
    console.log(err||res);
  }, { headers: { 'Content-Type': req.files.file.type }});
  res.end('ok');
});
app.use(connect['static'](__dirname))
app.listen(8080)
