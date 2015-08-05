# escape-json for Node.js

Escape nested double quotes and unescape apostrophes within JSON string.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license]][license-url]
[![Travis Build][travis-image]][travis-url]

[![NPM Statistics][npm-statistics-image]][npm-url]

## Installation

`npm install escape-json-node`

## Usage Example

```javascript
var escapeJSON = require("escape-json-node");

var JSONString = "{\"quoteText\": \"'Acceptance says, \"True, this is " +
"my situation at the moment. I\'ll look unblinkingly at the reality of it. " +
"But I will also open my hands to accept willingly whatever a loving " +
"Father sends me.\"\"}";

JSONString = escapeJSON(JSONString);

console.log(JSONString);
```

***

```javascript
{"quoteText": "'Acceptance says, \"True, this is my situation at the moment. 
I'll look unblinkingly at the reality of it. But I will also open my 
hands to accept willingly whatever a loving Father sends me.\""}
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-image]: https://img.shields.io/npm/v/escape-json-node.svg
[npm-url]: https://npmjs.org/package/escape-json-node
[downloads-image]: https://img.shields.io/npm/dm/escape-json-node.svg
[downloads-url]: https://npmjs.org/package/escape-json-node
[license]: https://img.shields.io/npm/l/escape-json-node.svg
[license-url]: https://github.com/AnatoliyGatt/escape-json-node/blob/master/LICENSE
[travis-image]: https://img.shields.io/travis/AnatoliyGatt/escape-json-node/master.svg
[travis-url]: https://travis-ci.org/AnatoliyGatt/escape-json-node
[npm-statistics-image]: https://nodei.co/npm/escape-json-node.png?downloads=true&downloadRank=true&stars=true