var express = require('express'),
    server = express();

    server.use('/bower_components',express.static(__dirname+"/bower_components"));
    server.use(express.static(__dirname+"/demo"));

    server.get('/index',function(req, res){
      res.sendFile("demo/index.html", {root:__dirname});
  });

    server.listen(8080,function(){
      console.log("Now listening on port 8080");
  });
