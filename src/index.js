import { isValidPath, isAbsolutePath, convertPathToAbsolute } from './controller/path.js';
import { getPathsFromDirectory, searchFilesMd  } from './controller/directory.js';
import { getLinks, getContent } from './controller/file.js';
import { validateLinks } from './controller/validate.js'

const firstFn = (route) => {
  let newRoute = route;
  if(isValidPath(route)) {
    if(!isAbsolutePath(route)){
      newRoute = convertPathToAbsolute(route);
      return newRoute;
    }
    getArrLinks(newRoute)
      .then(response => console.log(response))
      // .then(res => console.log(res))
      // .then(res => {
      //   validateLinks(res)
      //   .then(resp => console.log(resp))
      // })
      .catch(err => console.log(err))
  } else {
    console.log('La ruta ingresada no existe');
  }
};

const getArrLinks = (route) => new Promise((resolve, reject) => {
  const arrPathFiles = getPathsFromDirectory(route);
  const arrMd = searchFilesMd(arrPathFiles);
  const arrLinks = arrMd.map(elem => getLinks(getContent(elem), elem));
  let newArr = [];
  arrLinks.forEach(element => {
      element.forEach(elem => {
        newArr.push(elem);
      })
  })
  resolve(newArr);
});

firstFn("C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\test");
// getArrLinks("C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\test");
// getArrLinks("C:\\Users\\VIDEA\\CMMA\\projects\\LIM008-fe-md-links\\test\\directory-test\\directory1\\directory2\\help.md");