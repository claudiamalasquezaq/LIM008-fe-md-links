"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchFilesMd = exports.getPathsFromDirectory = exports.isFilePath = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isFilePath = route => {
  const stats = _fs.default.lstatSync(route);

  const answerStat = stats.isFile();
  return answerStat;
};

exports.isFilePath = isFilePath;

const getPathsFromDirectory = route => {
  let arrPathFiles = [];

  if (isFilePath(route)) {
    arrPathFiles.push(route);
  } else {
    const readDirectory = _fs.default.readdirSync(route);

    readDirectory.forEach(file => {
      const pathFile = _path.default.join(route, file);

      arrPathFiles = arrPathFiles.concat(getPathsFromDirectory(pathFile));
    });
  }

  return arrPathFiles;
};

exports.getPathsFromDirectory = getPathsFromDirectory;

const searchFilesMd = arrPaths => arrPaths.filter(file => {
  return _path.default.extname(file) === ".md";
});

exports.searchFilesMd = searchFilesMd;