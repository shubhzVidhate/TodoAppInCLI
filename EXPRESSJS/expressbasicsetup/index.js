import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page.!!");
});

app.listen("1000", ()=>{
    console.log('Server Start on 1000 port');
});