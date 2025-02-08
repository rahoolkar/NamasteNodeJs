//requiring files
const calculateSum = require("./nn-lecture-3.js") //this will run the whole code that is in that file, but it will able to access the variables and function in the file because the module protects it from leaking

let a = 80 ;
let b = 20 ;

calculateSum(a,b);