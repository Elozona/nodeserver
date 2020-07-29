const http = require('http');
const PORT = 3000;

//create a server object
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'}); // http header
  res.write('<h1>Hello World, welcome to WeJapa Internships</h1>'); //write a response
  res.end(); //end the response
}).listen(PORT, () => {
 console.log(`Server listening at port ${PORT}...`); //the server object listens on port 
});

