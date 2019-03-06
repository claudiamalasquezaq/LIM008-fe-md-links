import fs from 'fs';
import path from 'path';

export const isFilePath = (route) => {
	const stats = fs.lstatSync(route);
	const answerStat = stats.isFile();
	return answerStat;
};

export const getPathsFromDirectory = route => {
	let arrPathFiles = [];
  const readDirectory = fs.readdirSync(route);
  readDirectory.forEach(file => {
    const pathFile = path.join(route, file);
    const stats = fs.statSync(pathFile);
    if (stats.isDirectory()){
      arrPathFiles = arrPathFiles.concat(getPathsFromDirectory(pathFile))
    } else {
      arrPathFiles.push(pathFile);
    }
  })
  return arrPathFiles;
};

export const searchFilesMd = arrPaths => 
  arrPaths.filter((file) => {
    return path.extname(file) === ".md";
  });