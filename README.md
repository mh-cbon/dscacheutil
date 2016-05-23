# dscacheutil
Provides dscacheutil response parsing to JSON.

# install

  npm i @mh-cbon/dscacheutil --save

# usage

```js
  var dscacheutil = require('@mh-cbon/dscacheutil')

  dscacheutil({q: 'host'}, function (err, code, data) {
    if (code!==0) err && console.error(err);
    else data && console.log(JSON.stringify(data, null, 2));
    process.exit(code);
  });
```

# as a binary

```sh
npm i @mh-cbon/dscacheutil -g
jdscacheutil host
jdscacheutil rpc
jdscacheutil user
jdscacheutil group
```

see [dscacheutil](http://ss64.com/osx/dscacheutil.html)
