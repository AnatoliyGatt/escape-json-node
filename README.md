# escape-json for Node.js

Escape nested double quotes and unescape apostrophes within JSON string.

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![devDependencies Status][devDependencies-status-badge]][devDependencies-status-page-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]

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

[npm-package-url]: https://npmjs.org/package/escape-json-node

[npm-package-version-badge]: https://img.shields.io/npm/v/escape-json-node.svg?style=flat-square

[npm-package-license-badge]: https://img.shields.io/npm/l/escape-json-node.svg?style=flat-square
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/escape-json-node.svg?style=flat-square

[devDependencies-status-badge]: https://david-dm.org/AnatoliyGatt/escape-json-node/dev-status.svg?style=flat-square
[devDependencies-status-page-url]: https://david-dm.org/AnatoliyGatt/escape-json-node#info=devDependencies

[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/escape-json-node.svg?style=flat-square
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/escape-json-node

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/escape-json-node.svg?style=flat-square

[npm-package-statistics-badge]: https://nodei.co/npm/escape-json-node.png?downloads=true&downloadRank=true&stars=true