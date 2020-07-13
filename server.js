var express = require("express");

var server = express();

// http://localjhost:3000/?
server.get("/", function (req, res) {
  var name = req.query.name;
  if (!name) name = "person Friend";
  console.log("");
  console.log("I got  requeest");
  res.send(
    '<marquee><h1 style="color: green;">Hi there ' +
      name +
      "!</h1></marquee><p>Holla</p>"
  );

  // this line allows for receving request fromdevice refreshing to come back,,
  console.log(req.headers["user-agent"]);
});

// http://localhost:300:3000/greeting/Han

server.get("/greeting/:name", function (req, res) {
  //URL parameter
  var name = req.params.name;
  if (!name) name = "person Friend";
  console.log("");
  console.log("I got  requeest");
  res.send(
    '<marquee><h1 style="color: green;">Hi there ' +
      name +
      "!</h1></marquee><p>Holla</p>"
  );

  // this line allows for receving request fromdevice refreshing to come back,,
  console.log(req.headers["user-agent"]);
});

// http://localhost:300:3000/home

server.get("/home", function (req, res) {
  //URL parameter
  res.sendFile(__dirname + "/myAwesomePage.html");
});

module.exports = server;
// console.log(typeof express)

//
