const express = require("express");
const router = express.Router();
const todoCtrl = require("../controllers/todoCtrl");

router.post("/todo", todoCtrl.createTodo);
router.get("/todos", todoCtrl.getAllTodods);
router.get("/todo/:_id", todoCtrl.getSingleTodo);
router.put("/todo/:_id", todoCtrl.completeTodo);
router.put("/todo/:_id", todoCtrl.updateTodo);
router.delete("/todo/:_id", todoCtrl.deleteTodo);

module.exports = router;
