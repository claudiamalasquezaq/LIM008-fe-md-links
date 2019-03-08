"use strict";

var _path = _interopRequireDefault(require("path"));

var _directory = require("../directory.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cwd = process.cwd();

const getPath = route => _path.default.join(cwd, route);

const outputPaths = ['src\\controller\\test\\directory-test\\directory1\\directory2\\help.md', 'src\\controller\\test\\directory-test\\directory1\\directory2\\style.css', 'src\\controller\\test\\directory-test\\directory1\\main.js', 'src\\controller\\test\\directory-test\\hola.md', 'src\\controller\\test\\directory-test\\README.md'].map(route => getPath(route));
const outputFilesMd = ['src\\controller\\test\\directory-test\\directory1\\directory2\\help.md', 'src\\controller\\test\\directory-test\\hola.md', 'src\\controller\\test\\directory-test\\README.md'].map(route => getPath(route));
describe('isFilePath', () => {
  it('Debería ser una función', () => {
    expect(typeof _directory.isFilePath).toBe('function');
  });
  it('Debería retornar true si es ruta de un archivo', () => {
    expect((0, _directory.isFilePath)(getPath('src\\controller\\test\\file.spec.js'))).toBe(true);
  });
  it('Debería retornar false si es de un directorio', () => {
    expect((0, _directory.isFilePath)(getPath('src\\controller\\test'))).toBe(false);
  });
});
describe('getPathsFromDirectory', () => {
  it('Debería ser una función', () => {
    expect(typeof _directory.getPathsFromDirectory).toBe('function');
  });
  it('Debería recibir la ruta de un directorio y devolver un array con todas las rutas de sus archivos', () => {
    expect((0, _directory.getPathsFromDirectory)(getPath("src\\controller\\test\\directory-test"))).toEqual(outputPaths);
  });
});
describe('searchFilesMd', () => {
  it('Debería ser una función', () => {
    expect(typeof _directory.searchFilesMd).toBe('function');
  });
  it('Debería recibir un array de rutas de archivos y obtener solo los archivos .md', () => {
    expect((0, _directory.searchFilesMd)(outputPaths)).toEqual(outputFilesMd);
  });
});