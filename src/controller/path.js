import path from 'path';
import fs from 'fs';

const cwd = process.cwd();

export const isValidPath = route => fs.existsSync(route);

export const isAbsolutePath = route => path.isAbsolute(route);

export const convertPathToAbsolute = route => path.join(cwd, route);
