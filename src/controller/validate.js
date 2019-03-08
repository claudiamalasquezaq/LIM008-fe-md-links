const fetch = require('node-fetch');

const validateLinks = arrLinks => {
    let arrPromises = [];
    const arrNew = arrLinks.map(element => new Promise((resolve, reject) => {
      fetch(element.href)
      .then((res) => {
        if(res.status >= 200 && res.status < 400){
          const newObj = {
            href: element.href, 
            text: element.text, 
            file: element.file, 
            status: res.status, 
            statusText: res.statusText
          };
          resolve(newObj);
        } else {
          const newObj = {
            href: element.href, 
            text: element.text, 
            file: element.file, 
            status: res.status, 
            statusText: 'Fail'
          };
          resolve(newObj);
        }
      })
      .catch(err => reject(err));
    }));
    Promise.all(arrNew)
    .then((res) => {
      arrPromises.push(res);
    });
  };