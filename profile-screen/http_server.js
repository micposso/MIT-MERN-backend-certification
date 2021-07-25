// add http server
// -----------------------
// YOUR CODE
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const low     = require('lowdb');
const fs      = require('lowdb/adapters/FileSync');
const adapter = new fs('db.json');
const db      = low(adapter);

// declate public assets folder
app.use(express.static('public'));

// configure express to serve static files from public directory
// ------------------------------------------------------------------
// YOUR CODE

// init the data store
db.defaults({ posts: []}).write();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// post route
app.post('/test', (req, res) => {
    console.log(req.body.username, req.body.password);
    res.send(req.body.username + " " + req.body.password)
})

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
app.get('*', (req, res) => {  res.send('This page does not exist');});


// start server
// -----------------------
// YOUR CODE

app.listen(port, () => {
    console.log(`Server is listening to ${port}`);
})

