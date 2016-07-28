/**
 * @file index.js
 * @author ienix(ienix@foxmail.com)
 *
 * @since 16/7/28
 */

var rem = require('./bin/main.js');

module.exports = function (content, file, conf) {
    conf = conf || {
        rem: 18,
        min: 3,
        dpr: 2,
        exclude: []
    };

    return rem(content, file, conf);
};
