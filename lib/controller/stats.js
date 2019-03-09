"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStats = void 0;

const getStats = arrLinks => {
  const totalLinks = arrLinks.length;
  const uniqueLinks = [...new Set(arrLinks.map(elem => elem.href))].length;
  const stats = {
    Total: totalLinks,
    Unique: uniqueLinks
  };
  return stats;
};

exports.getStats = getStats;