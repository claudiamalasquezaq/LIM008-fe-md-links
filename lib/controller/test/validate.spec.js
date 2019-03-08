"use strict";

var _validate = require("../validate.js");

const arrInput = [{
  href: 'https://www.npmjs.com/package/whatwg-fetch#installation',
  text: 'Este es el link',
  file: 'C:\\Users\\Lab\\projects\\src\\README.md'
}];
const arrOutput = [{
  href: 'https://www.npmjs.com/package/whatwg-fetch#installation',
  text: 'Este es el link',
  file: 'C:\\Users\\Lab\\projects\\src\\README.md',
  status: 200,
  statusText: "ok"
}];
describe('validateLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof _validate.validateLinks).toBe('function');
  });
  it('Debería retornar el array de links con el estado', () => {
    expect((0, _validate.validateLinks)(arrInput)).toBe(arrOutput);
  });
});