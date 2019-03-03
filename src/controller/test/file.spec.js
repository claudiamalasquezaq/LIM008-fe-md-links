import { getContent, getLinks } from '../file.js'

const outputContent = `[Haz clic aquí para más información](https://www.bing.com/translator)`

describe('getContent', () => {
  it('Debería ser una función', () => {
    expect(typeof getContent).toBe('function');
  });
  it('Debería extraer contenido del archivo md y devolverlo como string', () => {
    expect(getContent("C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\test-md\\README.md")).toBe(outputContent);
  });
});

const outputLinks = [{
  href:'https://www.bing.com/translator', 
  text:'Haz clic aquí para más información', 
  // file:'C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\test-md\\README.md'
}];

describe('getLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof getLinks).toBe('function');
  });
  it('Debería devolver un array de objetos(href, text, file)',() => {
    expect(getLinks(outputContent)).toEqual(outputLinks);
  });
});