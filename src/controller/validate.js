const fetch = require('node-fetch');

const validateLinksObj = arrLinks => {
    let newArr = [];
    arrLinks.map((element) => {
      return fetch(element.href)
      .then((res) => {
        if(res.status >= 200 && res.status < 400){
          const newObj = {href: element.href, text: element.text, file: element.file, status: res.status, statusText: res.statusText};
          newArr.push(newObj);
          // console.log(newObj);
        } else {
          const newObj = {href: element.href, text: element.text, file: element.file, status: res.status, statusText: 'Fail'};
          newArr.push(newObj);
          // console.log(newObj);
        }
        console.log(newArr);
      })
      .catch(err => console.log(err));
    })
    Promise.all(arrLinks);
  };
  
  validateLinksObj([{href:"https://httpbin.org/status/400", text:"text1", file:"ruta1"}, {href:"https://www.google.com/?hl=es_419", text:"text2", file:"ruta2"}]);