const http = require('http');

const https = require('https');
            
https.get('https://nodejs.org/', (res) => {
  console.log('statusCode:', res.statusCode);
  
  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
