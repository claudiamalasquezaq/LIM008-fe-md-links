import { isValidPath, isAbsolutePath, convertPathToAbsolute } from './controller/path.js';
import { getPathsFromDirectory, searchFilesMd  } from './controller/directory.js';
import { getLinks, getContent } from './controller/file.js';
import { validateLinks } from './controller/validate.js'

export const getArrLinks = (route) => new Promise((resolve) => {
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

export const mdLinks = (path, options) => new Promise((resolve, reject) => {
  let newPath = path;
  if(isValidPath(path)) {
    if(!isAbsolutePath(path)) newPath = convertPathToAbsolute(path);
    if(options === undefined || !options.validate){
      return getArrLinks(newPath)
      .then(response => resolve(response))
      .catch(err => reject(err))
    }
    if(options.validate === true){
      return getArrLinks(newPath)
      .then((res) => {
        validateLinks(res)
          .then(resp => resolve(resp));    
      })
      .catch(err => reject(err))
    } 
  } else {
    console.log('La ruta ingresada no existe');
  }
});