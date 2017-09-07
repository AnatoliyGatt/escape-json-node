/**
 * @module escape-json
 * @description Provides function to escape nested double quotes and unescape apostrophes within JSON string.
 * @version 2.0.0
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015-2017 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @public
 * @function escapeJSON
 * @description Escape nested double quotes and unescape apostrophes within JSON strings.
 * @param {String} string - JSON string with unescaped nested double quotes and escaped apostrophes.
 * @returns {String} - Escaped JSON string.
 */

function escapeJSON(string) {
  if (string) {
    string = string.replace(
      new RegExp("\\'".replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'),
      "'"
    );
    string = string.replace(
      /"((?:"[^"]*"|[^"])*?)"(?=[:},])(?=(?:"[^"]*"|[^"])*$)/gm,
      (match, group) => {
        return '"' + group.replace(/"/g, '\\"') + '"';
      }
    );
  }
  return string;
}

/**
 * @public
 * @description Expose function to escape nested double quotes and unescape apostrophes within JSON string.
 * @param {String} string - JSON string with unescaped nested double quotes and escaped apostrophes.
 * @returns {String} - Escaped JSON string.
 */

module.exports = (string) => {
  return escapeJSON(string);
};
