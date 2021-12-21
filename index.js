const express = require('express')
const app = express();

app.use(express.static('public'));

app.get("/cornhubby", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/cornhubby", function(request, response) {
  response.sendFile(__dirname + "/bought.html");
})

app.listen(3000, function(req, res){
  console.log("Server is running on port 3000.");
})
