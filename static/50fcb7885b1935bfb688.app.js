webpackJsonp([1],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(125);
module.exports = __webpack_require__(327);


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lodash = __webpack_require__(328);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function component() {
  var element = document.createElement('div');

  /* 需要引入 lodash，下一行才能正常工作 */
  element.innerHTML = _lodash2.default.join(['Hello', 'webpack'], ' ');

  return element;
} // function timeout (ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done')
//   })
// }

// timeout(100).then((value) => {
//   console.log(value)
// })


document.body.appendChild(component());

/***/ })

},[124]);