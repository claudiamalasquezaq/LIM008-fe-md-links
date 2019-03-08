"use strict";

var _path = _interopRequireDefault(require("path"));

var _path2 = require("../path.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cwd = process.cwd();
describe('isValidPath', () => {
  it('Debería ser una función', () => {
    expect(typeof _path2.isValidPath).toBe('function');
  });
  it('Debería retornar true si es la ruta es válida', () => {
    expect((0, _path2.isValidPath)(_path.default.join(cwd, '\\src'))).toBe(true);
  });
  it('Debería retornar false si es la ruta no es válida', () => {
    expect((0, _path2.isValidPath)('C:\\Users\\C:\\projects')).toBe(false);
  });
});
describe('isAbsolutePath', () => {
  it('Debería ser una función', () => {
    expect(typeof _path2.isAbsolutePath).toBe('function');
  });
  it('Debería retornar true si la ruta es absoluta', () => {
    expect((0, _path2.isAbsolutePath)(_path.default.join(cwd, 'README.md'))).toBe(true);
  });
  it('Debería retornar false si la ruta es relativa', () => {
    expect((0, _path2.isAbsolutePath)('..\\src\\README.md')).toBe(false);
  });
});
describe('convertPathToAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof _path2.convertPathToAbsolute).toBe('function');
  });
  it('Debería recibir una ruta relativa y retornar la ruta absoluta', () => {
    expect((0, _path2.convertPathToAbsolute)('..\\LIM008-fe-md-links\\src\\README.md')).toBe(_path.default.join(cwd, 'src\\README.md'));
  });
});