var mysql = require("mysql");

var cnx = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projet_ismc"
  });

    cnx.connect(function(err) {
        if (err) throw err;
        cnx.query("SELECT * FROM module",function(err,result) =>  {
            if (err) throw err;
             console.log(result);
            //res.json(result);
        });
        // console.log("Connected!");
    });

  
