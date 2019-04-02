   const fs = require('fs');
   const directory = "./";
   const path = require('path');


   //  fs.readdir(folder, (err, files) => {
   //    files.forEach(file => {
   //      console.log(file);
   //    });
   //  });

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
             const reg = /(((https?:\/\/)|(www\.))[^\s]+)/g;
             const foundhttp = convertToString.match(reg);
             const numberOfUrl = foundhttp.length;
             console.log(foundhttp)
             console.log(numberOfUrl)
           })
         }
       })

     }
   })





   //   const foundLinksOnReadMe = convertToString.split("http").length-1;
   //   console.log(foundLinksOnReadMe)