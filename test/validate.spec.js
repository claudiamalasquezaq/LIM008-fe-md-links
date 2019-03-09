import { validateLinks } from '../src/controller/validate.js';

const arrInput = [{
  href: 'https://www.npmjs.com/package/whatwg-fetch#installation', 
  text: 'Este es el link', 
  file: 'C:\\Users\\Lab\\projects\\src\\README.md'
}];

const arrOutput = [{
  "file": 'C:\\Users\\Lab\\projects\\src\\README.md', 
  "href": 'https://www.npmjs.com/package/whatwg-fetch#installation',  
  "status": 200, 
  "statusText": "OK",
  "text": 'Este es el link'
}];

describe('validateLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof validateLinks).toBe('function');
  });
  it('Debería retornar el array de links con el estado', (done) => {
    return validateLinks(arrInput)
    .then((res) => {
      expect(res).toEqual(arrOutput);
      done()
    })
  });
});