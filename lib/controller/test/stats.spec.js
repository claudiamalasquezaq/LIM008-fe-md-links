"use strict";

var _stats = require("../stats.js");

const arrInput = [{
  file: 'C:\\Users\\Lab\\projects\\src\\README.md',
  href: 'www.abc.com',
  text: 'Este es el link'
}];
const arrOutput = {
  Total: 3,
  Unique: 3
};
describe('getStats', () => {
  it('Debería ser una función', () => {
    expect(typeof _stats.getStats).toBe('function');
  });
  it('Debería retornar un array de objeto con las estadísticas', () => {
    expect((0, _stats.getStats)(arrInput)).toBe(arrOutput);
  });
});