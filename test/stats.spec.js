import { getStats } from '../src/controller/stats.js';

const arrInput = [
  {file: 'C:\\Users\\Lab\\projects\\src\\README.md', href: 'www.abc.com', text: 'Visita este sitio'},
  {file: 'C:\\Users\\Lab\\projects\\src\\README.md', href: 'www.abc.com', text: 'Visita este sitio'},
  {file: 'C:\\Users\\Lab\\projects\\src\\README.md', href: 'www.google.com', text: 'Entra a Google'},
  {file: 'C:\\Users\\Lab\\projects\\src\\README.md', href: 'www.facebook.com', text: 'Entra a Facebook'},
  {file: 'C:\\Users\\Lab\\projects\\src\\README.md', href: 'www.linkedin.com', text: 'Entra a LinkedIn'}
];

const arrOutput = {Total: 5, Unique: 4};

describe('getStats', () => {
  it('Debería ser una función', () => {
    expect(typeof getStats).toBe('function');
  });
  it('Debería retornar un array de objeto con las estadísticas', () => {
    expect(getStats(arrInput)).toEqual(arrOutput);
  });
});