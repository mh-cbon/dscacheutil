require('should')
var fs = require('fs');
var spDs = require('../sp-dscacheutil.js')

describe('dscacheutil', function () {

  it('should parse group database', function (done) {
    fs.createReadStream(__dirname + '/../fixtures/group')
    .pipe(spDs())
    .on('error', done)
    .on('data', function (d) {
      d[0].should.eql({
        name: '_amavisd',
        password: '*',
        gid: '83'
      })
      d[d.length-1].should.eql({
        name: 'com.apple.access_ssh',
        password: '*',
        gid: '399'
      })
      done();
    })
  });

  it('should parse host database', function (done) {
    fs.createReadStream(__dirname + '/../fixtures/host')
    .pipe(spDs())
    .on('error', done)
    .on('data', function (d) {
      d[0].should.eql({
        ip_address: '127.0.0.1',
        name: 'localhost'
      })
      d[d.length-1].should.eql({
        ipv6_address: '::1',
        name: 'localhost'
      })
      done();
    })
  });

  it('should parse mount database', function (done) {
    fs.createReadStream(__dirname + '/../fixtures/mount')
    .pipe(spDs())
    .on('error', done)
    .on('data', function (d) {
      d[0].should.eql({
        file: '/',
        frequency: '0',
        name: '/dev/disk0s2',
        options: 'rw',
        pass: '1',
        type: 'rw',
        vfstype: 'hfs'
      })
      d[d.length-1].should.eql({
        file: '/',
        frequency: '0',
        name: '/dev/disk0s2',
        options: 'rw',
        pass: '1',
        type: 'rw',
        vfstype: 'hfs'
      })
      done();
    })
  });

  it('should parse protocol database', function (done) {
    fs.createReadStream(__dirname + '/../fixtures/protocol')
    .pipe(spDs())
    .on('error', done)
    .on('data', function (d) {
      d[0].should.eql({
         aliases: 'IP',
         name: 'ip',
         number: '0'
      })
      d[d.length-1].should.eql({
        aliases: 'DIVERT',
        name: 'divert',
        number: '254'
      })
      done();
    })
  });

  it('should parse rpc database', function (done) {
    fs.createReadStream(__dirname + '/../fixtures/rpc')
    .pipe(spDs())
    .on('error', done)
    .on('data', function (d) {
      d[0].should.eql({
         aliases: 'portmap sunrpc',
         name: 'portmapper',
         number: '100000'
      })
      d[d.length-1].should.eql({
        name: 'netinfobind',
        number: '200100001'
      })
      done();
    })
  });

  it('should parse service database', function (done) {
    fs.createReadStream(__dirname + '/../fixtures/service')
    .pipe(spDs())
    .on('error', done)
    .on('data', function (d) {
      d[0].should.eql({
         name: 'encrypted-llrp',
         port: '5085',
         protocol: 'udp'
      })
      d[d.length-1].should.eql({
        name: 'sentlm-srv2srv',
        port: '5099',
        protocol: 'udp'
      })
      done();
    })
  });

  it('should parse user database', function (done) {
    fs.createReadStream(__dirname + '/../fixtures/user')
    .pipe(spDs())
    .on('error', done)
    .on('data', function (d) {
      d[0].should.eql({
        dir: '/var/virusmails',
       gecos: 'AMaViS Daemon',
       gid: '83',
       name: '_amavisd',
       password: '*',
       shell: '/usr/bin/false',
       uid: '83'
      })
      d[d.length-1].should.eql({
        dir: '/var/empty',
        gecos: 'Kerberos FAST Account',
        gid: '-2',
        name: '_krbfast',
        password: '*',
        shell: '/usr/bin/false',
        uid: '246'
      })
      done();
    })
  });



})
