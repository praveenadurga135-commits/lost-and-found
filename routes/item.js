const express = require("express");
const router = express.Router();
const c=require("../controllers/itemController");

router.get("", c.getItems);

router.get("/pending", c.getPendingItems);

router.get("/:id", c.getItem);

router.post("", c.createItem);

router.put("/:id", c.updateItem);

router.delete("/:id", c.deleteItem);


module.exports=router;