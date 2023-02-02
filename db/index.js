const mysql=require("mysql");
const connectSql=mysql.createPool({
    host: '50.87.144.170',
    user: "sebmit86_tmuser",
    database: "sebmit86_trademark_cbd",
    password: "golegaltrademark",
    // connectionLimit: 100,
    multipleStatements: true,

 });
 connectSql.getConnection((err) =>{
     if(err){
         console.warn(err);
     }
     else{
         console.warn("Connected");
     }
 });
 
 
module.exports=connectSql; 