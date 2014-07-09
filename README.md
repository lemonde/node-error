# Node Error

Error manager instantiating errors read from a config.

## Install

```
npm install git://github.com/lemonde/node-error.git
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

## Error format

```json
{
  message: "the error message"
  code: "the HTTP error code"
}
```

## License

MIT
