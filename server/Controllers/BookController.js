// Model
const BookModel = require("../Models/BookModel");
// validation
const {validationResult}  = require("express-validator");


const BookController = {
    showAll:(req, res)=>{
        BookModel.showAll(res);
    },
    getBook:(req, res)=>{
        const {id} = req.params;
        BookModel.getId(id, res);
    },
    store:(req, res)=>{
        const errors = validationResult(req);
        const {title, author, publisher, year, page} = req.body;
        // check validation
        if (!errors.isEmpty() || !title || !author ||!publisher || !year || !page ) {
            return res.json({ 
                sucess:false,
                message:"Error"
            });
        }
        const data = {
            title,
            author,
            publisher,
            year,
            page
        };
        BookModel.store(data, res);
    },
    delete:(req, res)=>{
        const {id} = req.params;
        BookModel.delete(id, res);
    }
}

module.exports = BookController;