// var movies = require('./10_movies');

// console.log("person 2's movie is: " + movies.favMovie);

var movies = require('./10_movies');

var p2movies = movies();
p2movies.favMovie = "Dark knight";
console.log(p2movies.favMovie);