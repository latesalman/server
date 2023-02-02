const express =require('express');
const connect=require("./db/index");
const cors=require("cors");
const bodyParser = require('body-parser')


const app=express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/api/get',(req, res) =>{
    console.log("Get Req");
    connect.query("select * from golegaltrademarktable",(err, result) =>{
        if(err){
            console.log(err);
            res.send(err)
        }else{
            console.log(result);
            res.send(result)
        }
    })
})



app.post('/api/post', (req, res) =>{

//    const name=req.body.name;
//    const id=req.body.id;
//    const mark=req.body.mark;

// const data={name: "steve",email: "steve@gmail.com",phone:"1234455"}

const data=req.body;
connect.query("INSERT INTO golegaltrademarktable SET ?",data, (err, result) =>{
    if(err){
        console.log(err);
        res.send(err)
    }else{
        console.log(result);
        res.send(result)
    }
})

    
    
});




let PORT=5000;

app.listen(PORT,() =>{
    console.log(`This Port is runing on ${PORT}`)
});