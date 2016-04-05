module.exports = function parse(content,print){
  var cheerio = require('cheerio'),
      $ = cheerio.load(content);
var domanda=$( "font[color='red']" ).text();
var risposte=[];
$( "font[color='black']" ).each(function(i, elem) {
  risposte[i]=$(this).text();
});
var carta=[domanda,risposte[0],risposte[1],risposte[2],risposte[3],risposte[4]].join(",");

print(carta);



};
