const url = require("url")
const fakeUrl = "https://www.flipkart.com/?affid=siteplug&affExtParam1=91df8442b287a9e8518a73a57fc5c188:3000"

let parseUrl = url.parse(fakeUrl,true)
console.log(parseUrl);
console.log(parseUrl.pathname);