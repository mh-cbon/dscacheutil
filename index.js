var spawn = require('child_process').spawn;
var spDs = require('./sp-dscacheutil.js');

var dscacheutil = function (opts, then) {
  if(!opts.q) return then(new Error('Missing q option, the database name'))
  if([
    'group',
    'host',
    'mount',
    'protocol',
    'rpc',
    'service',
    'user',
  ].indexOf(opts.q)===-1) return then(new Error('Unknown database ' + opts.q))

  var child = spawn('dscacheutil', ['-q', opts.q], {stdio: 'pipe'})
  var err;
  var code;
  var data;
  var stream = spDs()
  .on('error', then)
  .on('end', function () {
    then(err, code, data)
  }).on('data', function (d) {
    data = d;
  });
  child.on('error', function (e) {
    err = e;
  })
  child.on('exit', function (c) {
    code = c;
  })
  child.stdout.pipe(stream)

  return child;
}

module.exports = dscacheutil;
