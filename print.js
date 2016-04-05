module.exports=function print(value){
  function finish(){
    console.log("finish");
  }
  var fs=require("fs");
  fs.appendFile('carte.txt', value+"\n", 'utf8', finish);
}
