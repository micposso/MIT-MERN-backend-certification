// add http server
// -----------------------
// YOUR CODE
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// declate public assets folder
app.use(express.static('public'));

// configure express to serve static files from public directory
// ------------------------------------------------------------------
// YOUR CODE

// init the data store
db.defaults({ posts: []}).write();

app.get('/', function(req, res){     
    // YOUR CODE
    res.render("index");

});

// list posts
app.get('/data', function(req, res){     
    // YOUR CODE
    res.send(db.get('posts').value());

});

// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------
app.get('/posts/:title/:id/:published', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3000/published/1/true
// ----------------------------------------------------
app.get('/published/:id/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3000/delete/5
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){

    // YOUR CODE

});

// handle non-existing routes
app.get('*', function(req, res) {  res.send('This page does not exist');});


// start server
// -----------------------
// YOUR CODE

app.listen(port, () => {
    console.log(`Server is listening to ${port}`);
})

