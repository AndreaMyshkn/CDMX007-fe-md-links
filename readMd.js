   const fs = require('fs');
   const file = ('./README.md')
   const path = "./";



   fs.readFile(file, (err, data) => {
     if (err) {
       console.log(err('ha ocurrido un error'))
     } {
       const convertToString = data.toString().cyan;
       console.log(convertToString)
       //Encuentra el número de coincidencias
      //  const reg = RegExp('http', 'g');
       const reg =  /\b(https?:\/\/.*?\.[a-z]{2,4}\b)/g;
       const foundhttp = convertToString.match(reg);
       console.log(foundhttp)

     }
   })


   //Leer todos los archivos del directorio
   const readDir = fs.readdirSync(path);

   console.log(readDir)

  
   //   const foundLinksOnReadMe = convertToString.split("http").length-1;
   //   console.log(foundLinksOnReadMe)