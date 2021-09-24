"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var i1 = new _impuesto["default"](1200, 200);
var c1 = new _cliente["default"]('Juan', i1);
var v1 = c1.calcularImpuestos();
console.log(v1);