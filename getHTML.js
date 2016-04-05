//var htmlparser = require("htmlparser");
module.exports=function getHTML(callback,print){
var  http = require("http");

var options = {
    host: "www.robertoiacono.it",
    port: 80,
    path: "/gioca-taboo-online.php"
};


var content="";
http.get(options, function(res) {
  res.setEncoding("utf8");
    res.on("data", function (chunk) {
        content += chunk;
    });
    res.on("end", function () {
        callback(content,print);
    });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
};
