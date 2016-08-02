/**
 * @file index.js
 * @author ienix(ienix@foxmail.com)
 *
 * @since 16/7/28
 */

var rem = require('./bin/main.js');
var objectAssign =  require('object-assign');
var assign = Object.assign 
        ? Object.assign
        : objectAssign;

module.exports = function (content, file, conf) {
    var defaultConf = {
        rem: 18,
        min: 3,
        dpr: 2,
        exclude: []
    };
    var cfg = assign({}, defaultConf, conf);

    return rem(content, file, cfg);
};
