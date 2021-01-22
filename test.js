'use strict';

var qiaoUtilEncode = require('qiao.util.encode');

var data     = '123456';
var key        = '7465737420537472696E67206B657931';
var s        = qiaoUtilEncode.TDESEncrypt(data, key);
console.log(s);

var ss        = qiaoUtilEncode.TDESDecrypt(s, key);
console.log(ss);

// or use iv and encoding(hex, base64)
var iv        = '';
var encoding= 'hex';
var s1        = qiaoUtilEncode.TDESEncrypt(data, key, iv, encoding);
console.log(s1);

var ss1        = qiaoUtilEncode.TDESDecrypt(s1, key, iv, encoding);
console.log(ss1);