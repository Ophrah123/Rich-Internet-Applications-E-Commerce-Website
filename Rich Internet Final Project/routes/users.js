var express = require("express")
var router = express.Router()
var path = require("path")
var fs = require("fs")

// router.get("/login",(req,res)=>{
//
//         res.sendFile(path.join(__dirname,"..","public","login.html"))
//
// })
//
// router.post("/login", (req,res)=>{
//
//     // res.send(JSON.stringify({"STATUS":200,"msg":"SUCCESS"}))
//     let username = req.body.uname
//     let password = req.body.password
//
//     if(username == "admin" && password=="admin"){
//         res.send(JSON.stringify({"STATUS":200,"msg":"SUCCESS from USER ROUTER"}))
//     }else{
//         res.redirect("/user/login")
//     }
// })

router.get('/profile',(req, res)=>{

    console.log("Cookie: "+JSON.stringify(req.cookies))

    if(req.session.isuser_valid){

        // res.send('<h2>Welcome '+ req.session.username+'</h2><br/><a href="/auth/logout">Logout</a>')
        let datafile = path.join(__dirname, "..","data","data.json")


        fs.readFile(datafile,"utf-8",(err,data)=>{

            if( err){
                res.render('secure/profile',{user:req.session.username, data:[]})
            }else{
                console.log(data)
                data = JSON.parse(data)
                res.render('secure/profile',{user:req.session.username, data:data})
            }
        })

    }
    else{
        res.redirect("/auth/login")
    }
})

module.exports = router