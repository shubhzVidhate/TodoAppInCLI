import express from 'express';
import homeRoute from './routes/homeRoute.js' 

const app = express();

app.set("view engine","ejs");

app.use("/", homeRoute);

app.listen('2002',()=>{
    console.log("Server Start On 2002");
});