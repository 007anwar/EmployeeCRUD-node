var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var employeeApi=require("./controllers/employee.controller");
app.listen(8099);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use("/api/employee",employeeApi);
console.log("Server UP and running on port 8099");

