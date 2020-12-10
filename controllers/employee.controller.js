var dbConfig=require("../config/db_connection");
var connection=dbConfig.getConnection();
connection.connect();
var express=require('express');
var router=express.Router();

router.get("/",(req,res)=>{
    connection.query("SELECT * FROM employee",(err,records,fields)=>{
        console.log("Getting all employee");
        if(err)
        {
            console.error("Error while fetching data");
        }
        else{
            res.send(records);
        }
    })
})


router.get("/:id",(req,res)=>{
    console.log("Fetching employee with id"+req.params.id);
    connection.query("select * from employee where id="+req.params.id,(err,records,fields)=>{
     
        if(err)
        {
            console.log("Employee not found with id"+req.params.id);
        
        }
        else{
            res.send(records);
        }
    })
})

router.post("/",(req,res)=>{
        console.log("Creating new employee");
        console.log(req.body);
        console.log(req.body.id);
    var id=req.body.id;
    var designation=req.body.designation;
    var email=req.body.email;
    var employeename=req.body.employeename;
    console.log("Values Assigned");
    connection.query("insert into employee values("+id+",'"+designation+"','"+email+"','"+employeename+"')",(err,result)=>{
        if(err)
        {
            console.log("Employee not found with id"+req.params.id);
        
        }
        else{
            res.send("EMPLOYEE CREATED");
        }
    })
})

router.put("/",(req,res)=>{
    console.log("Updating employee");
    console.log(req.body);
    console.log(req.body.id);
var id=req.body.id;
var designation=req.body.designation;
var email=req.body.email;
var employeename=req.body.employeename;
console.log("Values Assigned");
console.log("update employee set designation='"+designation+"',email='"+email+"',employeename='"+employeename+"' where id='"+id+"'");
connection.query("update employee set designation='"+designation+"',email='"+email+"',employeename='"+employeename+"' where id='"+id+"'",(err,result)=>{
    if(err)
    {
        console.log("Employee not found with id"+req.params.id);
    
    }
    else{
        res.send("EMPLOYEE UPDATED");
    }
})
})

router.delete("/:id",(req,res)=>{
    connection.query("delete from employee where id ="+req.params.id,(err,records,fields)=>{
        if(err)
        {
            console.log("Error deleting employee with id"+req.params.id);
        }
        else{
            res.send("EMPLOYEE WITH ID "+req.params.id+" DELETED")
        }
    })
})
module.exports=router;
