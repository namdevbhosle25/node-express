const fs = require("fs");

//Create folder

/* fs.mkdir("fsFolder", (err) => {
  if (err) throw err;
  console.log("fsFolder Created");
}); */

//Create file in fsFolder
 /*fs.writeFile("fsFolder/fsFile.txt",'This is mean Academy file',(err)=>{
    if(err) throw err
    console.log('fsFile is created');
 }) */

 // append fsFile data
 /*fs.appendFile('fsFolder/fsFile.txt','This is modified/appended data',(err)=>{
    if(err) throw err
    console.log('File is appended');
 }) */

 // Read file 
/* fs.readFile('fsFolder/fsFile.txt','utf8',(err,data)=>{
    if (err) throw err
    {
        console.log(data);
    }
 }) */

 //Delete file 
/* fs.unlink("fsFolder/abc.txt",(err)=>{
    if(err) throw err
    console.log('File is Deleted');
 }) */

 // Delete folder

 fs.rmdir("mnk",(err)=>{
    if (err)throw err 
    console.log('Folder is removed');
 })


