import fetch from 'node-fetch';

export const validateLinks = arrLinks => {
  const arrNew = arrLinks.map(element => new Promise((resolve, reject) => {
    return fetch(element.href)
      .then((res) => {
        if(res.status >= 200 && res.status < 400){
          element.status = res.status;
          element.statusText = res.statusText;
          resolve(element);
        } else {
          element.status = res.status;
          element.statusText = 'Fail';
          resolve(element);
        }
      })
      .catch(err => reject(err));
    }));
    return Promise.all(arrNew)
    .then((res) => {
      return res;
    })
};