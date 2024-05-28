const sqlite3= require("sqlite3")

let db = new sqlite3.Database('data/reactions.db')
//CREATING A NEW DATABASE- with the name and data type text
//db.run('CREATE TABLE langs(name text)');

//insertion
//can you insert contents of a file into it
db.run('INSERT INTO langs(name)VALUES(?)', ["Python"], (err)=>{
    if(err){
        return console.error(err.message)
    }//this - refers to the db/
    console.log("A new row was added. row_id="+this.lastID)
})
db.close()