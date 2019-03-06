import { getContent, getLinks } from '../file.js'

const outputContent = `[Haz clic aquí para más información](https://www.bing.com/translator)`
const routeFile = "C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\src\\controller\\test\\directory-test\\README.md";

describe('getContent', () => {
  it('Debería ser una función', () => {
    expect(typeof getContent).toBe('function');
  });
  it('Debería extraer contenido del archivo md y devolverlo como string', () => {
    expect(getContent(routeFile)).toBe(outputContent);
  });
});

const outputLinks = [{
  href:'https://www.bing.com/translator', 
  text:'Haz clic aquí para más información', 
  file: routeFile
}];

describe('getLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof getLinks).toBe('function');
  });
  it('Debería devolver un array de objetos(href, text, file)',() => {
    expect(getLinks(outputContent, routeFile)).toEqual(outputLinks);
  });
});