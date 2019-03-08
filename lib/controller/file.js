"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinks = exports.getContent = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _jsdom = _interopRequireDefault(require("jsdom"));

var _showdown = _interopRequireDefault(require("showdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  JSDOM
} = _jsdom.default;
const converter = new _showdown.default.Converter();

const getContent = routeFile => _fs.default.readFileSync(routeFile).toString();

exports.getContent = getContent;

const getLinks = (contentFile, routeFile) => {
  const contentHTML = converter.makeHtml(contentFile);
  const dom = new JSDOM(contentHTML);
  const arrayOfTagsA = dom.window.document.querySelectorAll('a');
  let arrNew = [];
  arrayOfTagsA.forEach(elem => {
    arrNew.push({
      href: elem.href,
      text: elem.textContent.slice(0, 50),
      file: routeFile
    });
  });
  return arrNew;
};

exports.getLinks = getLinks;