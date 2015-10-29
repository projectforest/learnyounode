var connect = require('connect');
var http = require('http');

// var app = connect();
// function doFirst(request, response, next){
//   console.log("sup");
//   next();
// }

// function doSecond(request, response, next){
//   console.log("mang");
//   next();
// }

// //user request, middleware
// app.use(doFirst);
// app.use(doSecond);


//optional argument of a path
var app = connect();

function profile(request, response){
  console.log("123");
}

function forum(request, response){
  console.log("forum requested");
}
app.use('/profile', profile);
app.use('/forum', forum)

http.createServer(app).listen(8888);
console.log("Server is running");