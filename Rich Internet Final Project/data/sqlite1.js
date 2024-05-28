const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database("./data/Car_Database.db",sqlite3.OPEN_READWRITE,(err)=> {
    if (err) {
        console.log(err.message)
    }else {
        console.log('connected to db!')
    }
})

let query = "SELECT * FROM Customers;"
//first argument is sql string(query), next is the callback - upon collecting teh data either
// we get an error or the rows back, then define parameters
db.each(query,[],(err, row)=>{
    if(err){
        throw err
    }else{
            console.log(row.first_name + " " + row.last_name)

    }

})

query = "SELECT * FROM Customers where first_name= ?;"
//first argument is sql string(query), next is the callback - upon collecting teh data either
// we get an error or the rows back, then define parameters
db.get(query,["Jeremy"],(err, row)=>{
    if(err){
        return console.error(err.message)
    }
    return row
        ? console.log("\n\n Found:" + row.first_name + " "+ row.last_name + " " + row.email)
        : conosle.log("No record found")

})

query = "SELECT * FROM Customers;"
db.each(query,[],(err, row)=>{
    if(err){
        throw err
    }
    console.log(`${row.first_name} ${row.last_name}, Email: ${row.email}`)

})