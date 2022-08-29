const http = require('http')
const port = 3000
http.createServer((req,res)=>{
    res.write("<h1>Wel-Come to Server</h1>")
    res.end()
}).listen(3000,()=>{
    //console.log("Server is started and listening on port no:3000")
    console.log(`Server is started and Listening on port no:${port}`);
})