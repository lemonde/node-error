# Node Error

Error manager instantiating errors read from a config.

## Install

```
npm install git+ssh://git@github.com:lemonde/node-error.git#v0.1.0
```

## Usage

```js
//error manager constructor
var Errors = require('node-error');

//instantiate error manager with a [nconf](https://github.com/flatiron/nconf)
var errors = Errors(config);

//throws the nconf error matching the nconf identifier
throw errors(‘users:notFound’);

```

## Error format example

```json
{
  "message": "the error message",
  "status": 400
}
```

## License

MIT
