"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = exports.getArrLinks = void 0;

var _path = require("./controller/path.js");

var _directory = require("./controller/directory.js");

var _file = require("./controller/file.js");

var _validate = require("./controller/validate.js");

const getArrLinks = route => new Promise(resolve => {
  const arrPathFiles = (0, _directory.getPathsFromDirectory)(route);
  const arrMd = (0, _directory.searchFilesMd)(arrPathFiles);
  const arrLinks = arrMd.map(elem => (0, _file.getLinks)((0, _file.getContent)(elem), elem));
  let newArr = [];
  arrLinks.forEach(element => {
    element.forEach(elem => {
      newArr.push(elem);
    });
  });
  resolve(newArr);
});

exports.getArrLinks = getArrLinks;
const options = {
  validate: false
};

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  let newPath = path;

  if ((0, _path.isValidPath)(path)) {
    if (!(0, _path.isAbsolutePath)(path)) {
      newPath = (0, _path.convertPathToAbsolute)(path);
    }

    if (options === undefined || !options.validate) {
      return getArrLinks(newPath).then(response => resolve(response)).catch(err => reject(err));
    }

    if (options.validate === true) {
      return getArrLinks(newPath).then(res => {
        (0, _validate.validateLinks)(res).then(resp => resolve(resp));
      }).catch(err => reject(err));
    }
  } else {
    console.log('La ruta ingresada no existe');
  }
});

exports.mdLinks = mdLinks;