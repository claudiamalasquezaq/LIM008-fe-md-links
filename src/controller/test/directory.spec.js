import { isFilePath, searchFilesMd } from '../directory.js'

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

describe('searchFilesMd', () => {
  it('Debería ser una función', () => {
    expect(typeof searchFilesMd).toBe('function');
  });
  it('Debería recibir la ruta de un directorio, buscar y obtener los archivos .md', () => {
    expect(searchFilesMd('C:\\Users\\Lab\\projects\\src')).toBe(['C:\\Users\\Lab\\projects\\src\\README.md', 'C:\\Users\\Lab\\projects\\src\\test.md']);
  });
});