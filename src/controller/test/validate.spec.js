import { validateLinks } from '../validate.js';

const arrInput = [{file: 'C:\\Users\\Lab\\projects\\src\\README.md', href: 'www.abc.com', text: 'Este es el link'}];
const arrOutput = [{file: 'C:\\Users\\Lab\\projects\\src\\README.md', href: 'www.abc.com', text: 'Este es el link', status: "ok"}];

describe('validateLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof validateLinks).toBe('function');
  });
  it('Debería retornar el array de links con el estado', () => {
    expect(validateLinks(arrInput)).toBe(arrOutput);
  });
});