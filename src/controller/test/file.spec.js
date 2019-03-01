import { getContent, getLinks } from '../file.js'

const outputContent = 
`# HOLA`

describe('getContent', () => {
  it('Debería ser una función', () => {
    expect(typeof getContent).toBe('function');
  });
  it('Debería extraer contenido del archivo md y devolverlo como string', () => {
    expect(getContent("C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\test-md\\README.md")).toBe(outputContent);
  });
});

describe('getLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof getLinks).toBe('function');
  });
  it('Debería devolver un array de objetos(href, text, file)',() => {
    expect(getLinks(outputContent)).toBe([{href:'www.myfirstpage.com', text:'Este es un readme', file:'./src/README.md' }])
  });
});