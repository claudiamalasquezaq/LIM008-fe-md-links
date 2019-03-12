export const getTotalLinks = (arrLinks) => {
  const totalLinks = arrLinks.length;
  return `Total: ${totalLinks}`;
}

export const getUniqueLinks = (arrLinks) => {
  const uniqueLinks = [...new Set(arrLinks.map(elem => elem.href))].length;
  return `Unique: ${uniqueLinks}`;
}