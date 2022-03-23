const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("Hello");
    console.log(request)
});

app.get("/contact", function(request, response){
    response.send("contact me at acharhaah2003@gmial.com");
});

app.get("/about", function(request, response){
    response.send("Hi my name is Acha Rha'ah and Im a computer enginneering student currently learning webdevelopment");
});

app.get("/hobbies", function(req, res){
    res.send("I love to code");
})

app.listen(3000, function(){
    console.log("server started on port 3000")
});
