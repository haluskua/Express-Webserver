//watching on a port
//requires an IP adrress and port

var server = require("./server");

var PORT = 3000;

server.listen(PORT, function () {
  console.log("Server is Listening on port", PORT);
  
});
