// const express = require('express')
// const app = express()
// const port = 3000

// console.log(app);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const { json } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.use(json());

let student = {
  id: "01",
  name: "Bhosle Namdev",
  address: "Nanded",
  contact: "9766153060",
  email: "namdevbhosle25@gmail.com",
  password: "namabhosle25@",
};

app.get("/", (req, res) => {
  res.json({
    msg: "student Info",
    data: student,
  });
  res.send("<h1>I am Namdev</h1>");
});

app.get("/home", (req, res) => {
  res.send("This is Home Page");
});

app.post("/login", (req, res) => {
  let usercredentials = req.body;
  console.log(usercredentials);
  if (student.email == usercredentials.username) {
    if (student.password == usercredentials.password) {
      res.json({
        msg: "Login Successful",
        data: student,
      });
    } else {
      res.json({
        msg: "Invalide Password",
      });
    }
  } else {
    res.json({
      msg: "Invalide username",
    });
  }
  res.send("Login Page from Post Method");
});

app.get("/login", (req, res) => {
  res.send("Login Page from Get method");
});

// useless Code
// app.get('/login',(req,res)=>{
//   res.send('Login Page from Get method 2')
// })

app.put("/updateuser/:id", (req, res) => {
  let userid = req.params;
  let userUpdateData = req.body;
  if (userid.id == student.id) {
    student.contact = userUpdateData.contact;
    student.address = userUpdateData.address;
    student.name = userUpdateData.name;
    student.email = userUpdateData.email;
    student.password = userUpdateData.password;
    res.json({
      msg: "User Updated",
      data: student,
    });
  } else {
    req.json({
      msg: "User not Found",
    });
  }
  // res.send("update User" + userid.id);
});

app.delete("/deleteuser/:id", (req, res) => {
  const userid = req.params;
  if (userid.id == student.id) {
    student = {};
    res.json({
      msg: "Student deleted",
      data: student,
    });
  } else {
    res.json({
      msg: "Student not Found",
    });
  }
  res.send("Delete User");
});

app.listen(port, () => {
  console.log(`App is started and listening on portno:${port}`);
});
