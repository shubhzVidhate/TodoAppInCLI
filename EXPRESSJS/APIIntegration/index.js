
import express from 'express';

const port = 3002;
const app = express();
app.set("view engine","ejs");


app.get("/posts",async (req,res)=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    res.render("posts",{ data });
});

app.listen(port,()=>{
    console.log(`server Start on ${port}`);
});