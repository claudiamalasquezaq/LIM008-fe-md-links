#!/usr/bin/env node
"use strict";

var _index = require("./index.js");

var _stats = require("./controller/stats.js");

const arg = process.argv.slice(2);

if (arg.length === 1) {
  console.log(arg[0]);
  (0, _index.mdLinks)(arg[0]).then(res => console.log(res));
}

if (arg.length === 2) {
  if (arg[1] === '--validate') {
    (0, _index.mdLinks)(arg[0], {
      validate: true
    }).then(res => console.log(res));
  } else if (arg[1] === '--stats') {
    (0, _index.mdLinks)(arg[0], {
      validate: true
    }).then(res => {
      console.log((0, _stats.getTotalLinks)(res));
      console.log((0, _stats.getUniqueLinks)(res));
    });
  }
}

if (arg.length === 3) {
  (0, _index.mdLinks)(arg[0], {
    validate: true
  }).then(res => {
    console.log((0, _stats.getTotalLinks)(res));
    console.log((0, _stats.getUniqueLinks)(res));
    let arrStatus = [];
    res.map(elem => {
      arrStatus.push(elem.statusText);
    });
    const statusFail = arrStatus.filter(elem => elem === 'Fail').length;
    console.log(`Broken: ${statusFail}`);
  });
}