   const fs = require('fs');
   const directory = "./";
   const path = require('path');

   fs.readdir(directory, (err, data) => {
     if (err) {
       console.log(err('ha ocurrido un error'))
     } {
       data.filter(file => {
         if (path.extname(file) === '.md') {
           fs.readFile(file, (err, data) => {
             if (err) {
               console.log(err('ha ocurrido un error'))
             }
             const convertToString = data.toString().cyan;
             console.log(convertToString)
             const regExp = /(((https?:\/\/)|(www\.))[^\s]+)/g;
             const foundUrl = convertToString.match(regExp);
             const numberOfUrl = foundUrl.length;
             console.log(foundUrl)
             console.log(numberOfUrl)
           })
         }
       })
     }
   })





   //   const foundLinksOnReadMe = convertToString.split("http").length-1;
   //   console.log(foundLinksOnReadMe)