// import path from 'path';
const path = require("path");
console.log(path);

// File Location

let fileLocation = path.join(__dirname, "dummy.txt");
console.log(fileLocation);

// File name

let fileName = path.basename(fileLocation);
console.log(fileName);

// File Extension
let fileExtention = path.extname(fileName);
console.log(fileExtention);

// Logic
if(fileExtention == ".txt"){
    console.log("File is found");
}else{
    console.log("File  is not found");
}