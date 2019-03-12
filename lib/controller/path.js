"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertPathToAbsolute = exports.isAbsolutePath = exports.isValidPath = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cwd = process.cwd();

const isValidPath = route => _fs.default.existsSync(route);

exports.isValidPath = isValidPath;

const isAbsolutePath = route => _path.default.isAbsolute(route);

exports.isAbsolutePath = isAbsolutePath;

const convertPathToAbsolute = route => _path.default.join(cwd, route);

exports.convertPathToAbsolute = convertPathToAbsolute;