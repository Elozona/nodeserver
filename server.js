const http = require('http');

//create a server object
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'}); // http header
  res.write('<h1>Hello World, welcome to WeJapa Internships</h1>'); //write a response
  res.end(); //end the response
}).listen(3000, () => {
 console.log("Server listening at port 3000..."); //the server object listens on port 3000
});