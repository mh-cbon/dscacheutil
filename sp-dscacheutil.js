
var miss = require('mississippi')
var split = require('split')

var spDscacheutil = function () {
  var res = [];
  var current = null;
  var stream = miss.through.obj(function transform (chunk, enc, cb) {
    chunk = chunk.toString();
    if (!chunk.length) {
      if(current) res.push(current);
      current = null;
    } else if (chunk.match(/^[^:]+:/)) {
      if(!current) current = {}
      var p = chunk.match(/^([^:]+):/)[1]
      var v = chunk.match(/^[^:]+:\s+(.+)/)
      v = v && v[1] || '';
      current[p] = v;
    } else {
      this.emit('error', 'not parseable content.')
    }
    cb();
  }, function flush(cb) {
    this.push(res);
    cb();
  })

  return miss.pipeline.obj(split(), stream);
}

module.exports = spDscacheutil;
