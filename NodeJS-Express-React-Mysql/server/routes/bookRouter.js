const express = require("express");
const router = express.Router();

const {check}  = require("express-validator");

// controller
const BookController = require("../Controllers/BookController");
router.get("/:id", BookController.getBook);
router.post("/insert", 
[
    check("title").isLength({min:3}).isString(),
    check("author").isLength({min:3}).isString(),
    check("publisher").isLength({min:3}).isString(),
    check("year").isInt(),
    check("page").isInt()
], BookController.store);
router.delete("/delete/:id", BookController.delete);
router.put("/update/:id", BookController.update);

module.exports = router