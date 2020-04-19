const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

// Routes
const book = require("./server/routes/bookRouter")

// Controllers
const BookController = require("./server/Controllers/BookController");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


// router
// Book Module
app.get("/books", BookController.showAll);
app.use("/book", book);

const PORT = 1000;
app.listen(PORT, ()=>console.log(`Server running at PORT${PORT}`));