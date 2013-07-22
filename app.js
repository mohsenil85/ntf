var static = require('node-static');
var url = require('url');
_und = require("./underscore-min")
//
// Create a node-static server instance to serve the './public' folder
//
var file = new(static.Server)('./public');

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    //
    // Serve files!
    //
    file.serve(request, response);
  }).resume();
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  if (!(_und.isEmpty(query))){
    console.log(query);
  };

}).listen(8000);
