#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))

if(!argv.q) {
  console.error('Wrong usage')
  console.error('Usage: jdscacheutil -q [database]')
  console.error('-q     The name of the database to query ')
  console.error('       One of group, host, mount, protocol, rpc, service, user')
  process.exit(1)
}

var dscacheutil = require('./index.js')

dscacheutil(argv, function (err, code, data) {
  if (code!==0) err && console.error(err);
  else data && console.log(JSON.stringify(data, null, 2));
  setTimeout(function () { // weird bug fix :x
    process.exit(parseInt(code));
  }, 100)
})
