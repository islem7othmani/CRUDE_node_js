const express = require("express");
const app = express();
const mongoose = require("mongoose");

// connect to the data base 
mongoose.connect(
     "mongodb+srv://islem:123othmani@cluster0.pvkx4.mongodb.net/?retryWrites=true&w=majority",
     {
        useNewUrlParser : true ,
        useUnifiedTopology : true
     }

);
mongoose.connection.on("connected",()=>{
    console.log("DB connected with success");
});
mongoose.connection.on("error",(err)=>{
    console.log("error happned");
});


// import the routes 
const MyRoute = require("./routes/stories.routes");

//Middlewares 
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Middlewares Routes
app.use("/stories", MyRoute);

//server listener
const Port = 8000 ;
app.listen(Port ,()=>{
    console.log("server listenning ...")
});