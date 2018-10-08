var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = 8080;

mongoose.connect('mongodb://localhost/spacebookDB', function() {
  console.log("DB connection established!!!");
})

var Post = require('./models/postModel');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8000, () => {
  console.log("Server started on port " + 8080);
});


app.get("/posts", function(req,res){
  Post.find(function (error, result){
    if(error) {res.status(500).send(error) 
      return console.error(error);
     }
     else{
    console.log (result);
  res.send(result)
     }
  });
}
)

app.post("/posts", function(req,res){
  var post = new Post(req.body);
  post.save(function (error,result) {
    if(error) {res.status(500).send(error) 
       console.error(error);
     }
     else{
    console.log (result);
  res.send(result)
     }   

}
)






































