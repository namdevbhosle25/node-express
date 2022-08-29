const express = require("express");
const router = express.Router();

var users = [
  { id: 1, name: "Namdev", address: "Nanded", contact: 9766153060 },
  { id: 2, name: "Kajal", address: "Nashik", contact: 9565484545 },
  { id: 3, name: "Omkar", address: "Pune", contact: 7852653262 },
  { id: 4, name: "Bhagyashree", address: "Nanded", contact: 9865626255 },
];

//GET method to get all users
router.get("/users", (req, res) => {
  res.json({
    data: users,
  });
});

router.get("/user/:id", (req, res) => {
  let id = req.params.id;
  let user = users.filter((user) => {
    return user.id == id;
  });

  console.log(user);
  if (user.length > 0) {
    res.json({
      data: user,
    });
  } else {
    res.json({
      msg: "User not found",
    });
  }
});

router.post("/user", (req, res) => {
  let user = req.body;
  let lastElementId = users[users.length - 1].id;
  user.id = lastElementId + 1;
  users.push(user);
  res.json({
    data: user,
  });
});

router.put("/user/:id", (req, res) => {
  let id = req.params.id;
  let updateData = req.body;
  let keys = Object.keys(updateData);

  console.log(keys);

  keys.forEach((key) => {
    if (key == "name") {
      let filteredUser = users.filter((user) => {
        return user.id == id;
      });
      let userindexno = users.indexOf(filteredUser[0]);
      let updatedUser = {
        id: id,
        name: updateData.name,
        address: filteredUser[0].address,
      };

      console.log(filteredUser);
      console.log(userindexno);

      users[userindexno] = updatedUser;
      res.json({
        data: users,
      });
    } else if (key == "address") {
      let filteredUser = users.filter((user) => {
        return user.id == id;
      });
      let userindexno = users.indexOf(filteredUser[0]);
      let updatedUser = {
        id: id,
        name: filteredUser[0].name,
        address: updateData.address,
      };
      users[userindexno] = updatedUser;
      res.json({
        data: users,
      });
    } else {
      res.json({
        msg: "User not updated..!",
      });
    }
  });
});

router.delete("/user/:id", (req, res) => {
  let id = req.params.id;
  let user = users.filter((user) => {
    return user.id == id;
  });
  let userindexno = users.indexOf(user);
  users.splice(userindexno, 1);
  res.json({
    data: users,
  });
});

module.exports = router;
