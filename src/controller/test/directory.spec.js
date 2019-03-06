import { isFilePath, getPathsFromDirectory,  searchFilesMd } from '../directory.js'

const outputPaths = [
  'C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\directory-test\\directory1\\directory2\\help.md',
  'C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\directory-test\\directory1\\directory2\\style.css',
  'C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\directory-test\\directory1\\main.js',
  'C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\directory-test\\hola.md',
  'C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\directory-test\\README.md'];

const outputFilesMd = [
  'C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\directory-test\\directory1\\directory2\\help.md',
  'C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\directory-test\\hola.md',
  'C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\directory-test\\README.md'
];

describe('isFilePath', () => {
  it('Debería ser una función', () => {
    expect(typeof isFilePath).toBe('function');
  });
  it('Debería retornar true si es ruta de un archivo', () => {
  expect(isFilePath('C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\file.spec.js')).toBe(true);
  });
  it('Debería retornar false si es de un directorio', () => {
    expect(isFilePath('C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test')).toBe(false);
  });
});

describe('getPathsFromDirectory', () => {
  it('Debería ser una función', () => {
    expect(typeof getPathsFromDirectory).toBe('function');
  });
  it('Debería recibir la ruta de un directorio y devolver un array con todas las rutas de sus archivos', () =>{
  expect(getPathsFromDirectory("C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\directory-test")).toEqual(outputPaths);
  });
});

describe('searchFilesMd', () => {
  it('Debería ser una función', () => {
    expect(typeof searchFilesMd).toBe('function');
  });
  it('Debería recibir un array de rutas de archivos y obtener solo los archivos .md', () => {
    expect(searchFilesMd(outputPaths)).toEqual(outputFilesMd);
  });
});