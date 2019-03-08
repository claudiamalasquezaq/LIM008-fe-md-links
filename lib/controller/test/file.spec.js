"use strict";

var _path = _interopRequireDefault(require("path"));

var _file = require("../file.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cwd = process.cwd();
const outputContent = `[Haz clic aquí para más información](https://www.bing.com/translator)`;

const routeFile = _path.default.join(cwd, "src\\controller\\test\\directory-test\\README.md");

describe('getContent', () => {
  it('Debería ser una función', () => {
    expect(typeof _file.getContent).toBe('function');
  });
  it('Debería extraer contenido del archivo md y devolverlo como string', () => {
    expect((0, _file.getContent)(routeFile)).toBe(outputContent);
  });
});
const outputLinks = [{
  href: 'https://www.bing.com/translator',
  text: 'Haz clic aquí para más información',
  file: routeFile
}];
describe('getLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof _file.getLinks).toBe('function');
  });
  it('Debería devolver un array de objetos(href, text, file)', () => {
    expect((0, _file.getLinks)(outputContent, routeFile)).toEqual(outputLinks);
  });
});