import path from 'path';
import fs from 'fs';

export const isValidPath = route => fs.existsSync(route);

export const isAbsolutePath = route => path.isAbsolute(route);

export const convertPathToAbsolute = route => path.resolve(route);


