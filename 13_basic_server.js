var http = require('http');

function onRequest(request, response){ //(request object, response object)
  console.log("User made a request" + request.url);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Here is some data");
  response.end();
}

http.createServer(onRequest).listen(8888);
console.log("server active");

