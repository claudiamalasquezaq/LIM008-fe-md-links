import { isFilePath, searchFilesMd } from '../directory.js'

describe('isFilePath', () => {
  it('Debería ser una función', () => {
    expect(typeof isFilePath).toBe('function');
  });
  it('Debería retornar true si es ruta de un archivo y false si es de un directorio', () => {
    expect(isFilePath('C:\\Users\\Lab\\projects\\src')).toBe(false);
  });
})

describe('searchFilesMd', () => {
  it('Debería ser una función', () => {
    expect(typeof searchFilesMd).toBe('function');
  });
  it('Debería recibir la ruta de un directorio, buscar y obtener los archivos .md', () => {
    expect(searchFilesMd('C:\\Users\\Lab\\projects\\src')).toBe(['C:\\Users\\Lab\\projects\\src\\README.md', 'C:\\Users\\Lab\\projects\\src\\test.md']);
  });
});