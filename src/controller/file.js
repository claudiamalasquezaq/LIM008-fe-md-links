import fs from 'fs';

import jsdom from 'jsdom';
const { JSDOM } = jsdom;

import showdown from 'showdown';
const converter = new showdown.Converter();

export const getContent = routeFile => fs.readFileSync(routeFile).toString();

export const getLinks = (contentFile, routeFile) => {
  const contentHTML = converter.makeHtml(contentFile);
  const dom = new JSDOM(contentHTML);
  const arrayOfTagsA = dom.window.document.querySelectorAll('a');
  let arrNew = [];
  arrayOfTagsA.forEach(elem => {
    arrNew.push({
      href: elem.href, 
      text: (elem.textContent).slice(0,50), 
      file: routeFile
    });
  });
  return arrNew;
};
