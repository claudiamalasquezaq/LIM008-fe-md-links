import { getTotalLinks, getUniqueLinks } from '../src/controller/stats.js';

const arrInput = [
  {file: 'C:\\Users\\Lab\\projects\\src\\README.md', href: 'www.abc.com', text: 'Visita este sitio'},
  {file: 'C:\\Users\\Lab\\projects\\src\\README.md', href: 'www.abc.com', text: 'Visita este sitio'},
  {file: 'C:\\Users\\Lab\\projects\\src\\README.md', href: 'www.google.com', text: 'Entra a Google'},
  {file: 'C:\\Users\\Lab\\projects\\src\\README.md', href: 'www.facebook.com', text: 'Entra a Facebook'},
  {file: 'C:\\Users\\Lab\\projects\\src\\README.md', href: 'www.linkedin.com', text: 'Entra a LinkedIn'}
];

const arrOutput = {Total: 5, Unique: 4};

describe('getTotalLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof getTotalLinks).toBe('function');
  });
  it('Debería retornar un string con el total de links', () => {
    expect(getTotalLinks(arrInput)).toEqual('Total: 5');
  });
});

describe('getUniqueLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof getUniqueLinks).toBe('function');
  });
  it('Debería retornar un string con el total de links únicos', () => {
    expect(getUniqueLinks(arrInput)).toEqual('Unique: 4');
  });
});