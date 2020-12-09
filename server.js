var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var productApi=require("./controllers/product.controller");
app.listen(8099);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use("/api/product",productApi);
console.log("Server UP and running on port 8099");

