const mysql = require("mysql");

const koneksi = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"lumen_books",
    multipleStatements:true
});

koneksi.connect(()=>{
    console.log("Mysql Connected");
});

module.exports = koneksi;