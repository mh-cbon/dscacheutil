NODE_BIN_PATH=/Users/vagrant/node/node-v6.2.0-darwin-x64/bin

cd /Users/vagrant/wd/

rm -fr node_modules/
$NODE_BIN_PATH/node $NODE_BIN_PATH/npm i

DEBUG=* $NODE_BIN_PATH/node $NODE_BIN_PATH/mocha test/
