"use strict";

var _path = require("./controller/path.js");

var _directory = require("./controller/directory.js");

var _file = require("./controller/file.js");

var _validate = require("./controller/validate.js");

var _stats = require("./controller/stats.js");

const firstFn = route => {
  let newRoute = route;

  if ((0, _path.isValidPath)(route)) {
    if (!(0, _path.isAbsolutePath)(route)) {
      newRoute = (0, _path.convertPathToAbsolute)(route);
      return newRoute;
    }

    getArrLinks(newRoute).then(response => {
      (0, _validate.validateLinks)(response).then(objVal => console.log(objVal));
    }).catch(err => console.log(err));
    getArrLinks(newRoute).then(response => console.log((0, _stats.getStats)(response)));
  } else {
    console.log('La ruta ingresada no existe');
  }
};

const getArrLinks = route => new Promise((resolve, reject) => {
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

firstFn("C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\test"); // getArrLinks("C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\test");
// getArrLinks("C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\test\\directory-test\\directory1\\directory2\\help.md");