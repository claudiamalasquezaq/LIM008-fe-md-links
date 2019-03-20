import fs from 'fs';
import path from 'path';

export const isFilePath = (route) => {
	const stats = fs.lstatSync(route);
	const answerStat = stats.isFile();
	return answerStat;
};

export const getPathsFromDirectory = route => {
  let arrPathFiles = [];
  if(isFilePath(route)){
    arrPathFiles.push(route);
  } else {
    const readDirectory = fs.readdirSync(route);
    readDirectory.forEach(file => {
      const pathFile = path.join(route, file);
      arrPathFiles = arrPathFiles.concat(getPathsFromDirectory(pathFile))
    })
  }
  return arrPathFiles;
};

export const searchFilesMd = arrPaths => 
  arrPaths.filter((file) => {
    return path.extname(file) === ".md";
  });