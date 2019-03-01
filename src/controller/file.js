import fs from 'fs';

export const getContent = (routeFile) => {
  const fileContent = fs.readFileSync(routeFile).toString();
  return fileContent;
};

export const getLinks = (contentFile) => {

};
