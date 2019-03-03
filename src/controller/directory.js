import fs from 'fs';

export const isFilePath = (route) => {
	const stats = fs.lstatSync(route);
	const answerStat = stats.isFile();
	return answerStat;
};

export const searchFilesMd = (route) => {

};