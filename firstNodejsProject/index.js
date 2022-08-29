const http = require("http"); // Internal Module
const data = require('./modules/user') // Local Module
const generatePassword = require('generate-password') // External Module

http
  .createServer((req, res) => {

    let newPassword = generatePassword.generate({
        length:10,
        numbers:true,
        uppercase:true,
        lowercase:true,
        symbols : true
    })
    res.write("<h1> This is my nodejs app</h1>");
    let username = data.user.name;
    res.write(`<h2>Welcome :${username}</h2>`)
    res.write(`<h3 style="color:red; font-weight:bold">@Mean${newPassword}</h3>`)
    res.end();
  })
  .listen(3000, () => {
    console.log(
      "Server is started and listen on port no:3000. visit the site http:///localhost:3000/"
    );
  });
