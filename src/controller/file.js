import fs from 'fs';

import jsdom from 'jsdom';
const { JSDOM } = jsdom;

import showdown from 'showdown';
const converter = new showdown.Converter();

export const getContent = (routeFile) => {
  return fs.readFileSync(routeFile).toString();
  // return fileContent;
};

export const getLinks = (contentFile, routeFile) => {
  const contentHTML = converter.makeHtml(contentFile);
  const dom = new JSDOM(contentHTML);
  const arrayOfTagsA = dom.window.document.querySelectorAll('a');
  let arrNew = [];
  arrayOfTagsA.forEach(elem => {
    arrNew.push({href: elem.href, text: elem.textContent, file: routeFile});
  });
  return arrNew;
};
