"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUniqueLinks = exports.getTotalLinks = void 0;

const getTotalLinks = arrLinks => {
  const totalLinks = arrLinks.length;
  return `Total: ${totalLinks}`;
};

exports.getTotalLinks = getTotalLinks;

const getUniqueLinks = arrLinks => {
  const uniqueLinks = [...new Set(arrLinks.map(elem => elem.href))].length;
  return `Unique: ${uniqueLinks}`;
};

exports.getUniqueLinks = getUniqueLinks;