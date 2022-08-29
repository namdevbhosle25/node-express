const http = require("http");
const port = 3000;
const fs = require("fs");
const path = require("path");

//Create server
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const indexFileLocation = path.join(__dirname, "index.html");
    fs.readFile(
      indexFileLocation,
      (err,data) => {
        if (err) throw err;
        res.write(data);
        res.end();
      })

  } else if (req.url == "/contact") {
    const contactFileLocation = path.join(__dirname, "contact.html");
    fs.readFile(contactFileLocation, (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url == "/about") {
    const aboutFileLocation = path.join(__dirname, "about.html");
    fs.readFile(aboutFileLocation, (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url == "/help") {
    const helpFileLocation = path.join(__dirname, "help.html");
    fs.readFile(helpFileLocation, (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else {
    res.write("Page is not Found");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is started and Listening on Port No:${port}`);
});
