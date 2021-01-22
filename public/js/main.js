"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("core-js/modules/es6.array.find.js");

require("core-js/modules/es7.array.includes.js");

require("core-js/modules/es6.string.includes.js");

require("core-js/modules/es6.promise.js");

require("core-js/modules/es6.object.to-string.js");

var fn = function fn(num) {
  return num + 2;
};

var promise = Promise.resolve('ok');
[1, 2, 3].includes(1);
[1, 4, -5, 10].find(function (item) {
  return item < 0;
});

var Person = /*#__PURE__*/function () {
  function Person() {
    (0, _classCallCheck2["default"])(this, Person);
  }

  (0, _createClass2["default"])(Person, [{
    key: "sayname",
    value: function sayname() {
      return 'name';
    }
  }]);
  return Person;
}();

var john = new Person();
console.log(john);
