const koneksi = require("../connection/connection");
const Books = {
    table:"books",
    showAll:(res)=>{
        const query = `SELECT * FROM ${Books.table}`;
        koneksi.query(query, (err, rows)=>{
            if(err) res.json(err);
            res.json({
                sucess:true,
                message:"Success, Show All Books",
                data:rows,
            });
        })
    },
    getId:(id, res)=>{
        const query = `SELECT * FROM ${Books.table} where id=?`;
        koneksi.query(query, [id], (err, rows)=>{
            if(err) res.json(err);
            if(rows.length <= 0){
                res.json({
                    success:false,
                    message:`Fail, Book with id = ${id} Not Found`,
                })
            }else{
                res.json({
                    success:true,
                    message:`Success, Get Book with id = ${id}`,
                    data:rows
                })
            }
        });
    },
    store:(data, res)=>{
        const query = `INSERT INTO ${Books.table} SET ?`;
        koneksi.query(query, data, (err, result, fields)=>{
            if(err) res.json(err);
            if(result.affectedRows > 0){
                res.json({
                    success:true,
                    message:`Success, Added Book with id = ${result.insertId}`,
                    data
                })
            }else{
                res.json({
                    success:false,
                    message:`Fail Added Book`,
                    data:[]
                })
            }
        })
    },
    delete:(id, res)=>{
        const query = `SELECT * FROM ${Books.table} where id=?`;
        const queryDelete = `DELETE FROM ${Books.table} where id = ?`;
        koneksi.query(query, [id], (err, rows)=>{
            if(err) res.json(err);
            if(rows.length <= 0){
                res.json({
                    success:false,
                    message:"Book Id Not Found"
                })
            }
            koneksi.query(queryDelete,[id], (err, rows)=>{
                if(err) res.json(err);
                if(rows.affectedRows > 0 ){
                    res.json({
                        sucess:true,
                        message:`Success, Delete Book with id = ${id}`,
                    });
                }
            })
            
        });
    },
    update:(id, data, res)=>{
        const queryGet = `SELECT * FROM ${Books.table} where id=?`;
        const queryUpdate = `UPDATE ${Books.table} SET ? WHERE id = ?`;
        koneksi.query(queryGet, [id], (err, rows)=>{
            if(err) res.json(err);
            if(rows.length <= 0){
                res.json({
                    success:false,
                    message:"Book Id Not Found"
                })
            }
            koneksi.query(queryUpdate, [data, id], (err, rows)=>{
                if(err) res.json(err);
                if(rows.affectedRows > 0 ){
                    res.json({
                        sucess:true,
                        message:`Success, Book with id = ${id} Updated`,
                        data
                    });
                }
            })
            
        });
    }
}

module.exports = Books;