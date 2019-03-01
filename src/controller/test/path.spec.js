import { convertPathToAbsolute, isAbsolutePath, isValidPath } from '../path.js';

describe('isValidPath', () => {
  it('Debería ser una función', () => {
    expect(typeof isValidPath).toBe('function');
  });
  it('Debería retornar true si es válida y false si no lo es', () => {
    expect(isValidPath('C:\\Users\\Lab\\projects\\src')).toBe(true);
  });
});

describe('isAbsolutePath', () => {
  it('Debería ser una función', () => {
    expect(typeof isAbsolutePath).toBe('function');
  });
  it('Debería retornar true si la ruta es absoluta', () => {
    expect(isAbsolutePath('C:\\Users\\CMMA\\src\\README.md')).toBe(true);
  });
  it('Debería retornar false si la ruta es relativa', () => {
    expect(isAbsolutePath('..\\src\\README.md')).toBe(false);
  });
});

describe('convertPathToAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof convertPathToAbsolute).toBe('function');
  });
  it('Debería recibir una ruta relativa y retornar la ruta absoluta', () => {
  expect(convertPathToAbsolute('..\\src\\README.md')).toBe('C:\\Users\\Lab\\projects\\src\\README.md');
  });
});