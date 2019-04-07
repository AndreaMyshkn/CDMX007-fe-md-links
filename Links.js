const searchOnDirectory = require('./readMd.js');
const index = require('./index.js')
const fetch = require('node-fetch');
const validateLinks = require('./validateLinks.js')



const foundLinksToValidate = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const regExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g
    const foundUrl = data.match(regExp);
    validateLinks.validate(foundUrl);
  }
}


const foundLinksToStats = (err, data) =>{

  if (err){
    console.log (err);
  } else{
    const regExp2= /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g
    const numberOfLinks = data.match(regExp2).length;
    console.log (`El número de links encontrados es ${numberOfLinks}`)
  }
}



const foundLinksToValidateAndStats = (err, data) =>{
if (err){
  console.log(err)
} else{
  const regExp3 = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g;
  const arrayLinks= data.match(regExp3)


    const object = {};
    const result = [];
    const resultUnique = [];
  
    arrayLinks.forEach(element => {
      if(!object[element])
          object[element] = 0;
        object[element] += 1;
    })
  
    for (const prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
       if (object[prop] = 1){
          resultUnique.push(prop)
       }
    }
  
    console.log (`Cantidad de links repetidos:  ${result.length}`)
    console.log (`Cantidad de links únicos : ${resultUnique.length}`)
    console.log (`Total de links:${arrayLinks.length}`)
  }
  
}









module.exports.foundLinksToValidate = foundLinksToValidate;
module.exports.foundLinksToStats =foundLinksToStats;
module.exports.foundLinksToValidateAndStats=foundLinksToValidateAndStats;





