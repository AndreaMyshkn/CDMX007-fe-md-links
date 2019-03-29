   const fs = require ('fs');
    const file = ('./README.md')
    const path = "./";


    
    fs.readFile(file,  (err, data)=>{
      if(err){
          console.log(err('ha ocurrido un error'))
      } {
          const convertToString = data.toString().cyan;

        console.log(convertToString)

      const reg = RegExp('http', 'g')
      const foundhttp= convertToString.match(reg).length;
      console.log(foundhttp)
 
      }})
      
  
      //Leer todos los archivos del directorio
  const readDir = fs.readdirSync(path);
 
   console.log(readDir)

    

    //         const urlR = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
//  const url= convertToString.match(urlR)
        //   const foundLinksOnReadMe = convertToString.split("http").length-1;
        //   console.log(foundLinksOnReadMe)