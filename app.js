var cut = require("./lib/cut.js");


var args = [1, 2, 3, 4, 3, 3, 2, 1];
var length = args.length;

var results = cut.reduce(args, length);

if(results){
    for(var  i=0; i<results.length; i++){
        console.log(results[i]);

    }
}else{
    console.log("Something went wrong");
}