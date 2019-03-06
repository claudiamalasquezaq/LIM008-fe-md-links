import path from 'path';
import fs from 'fs';

export const isValidPath = (route) => {
  return fs.existsSync(route);  
};

export const isAbsolutePath = (route) => {
  return path.isAbsolute(route);
};

export const convertPathToAbsolute = (route) => {
  return path.resolve(route);
};

