import express from 'express';

const app = express();
const port = 3002;

// when you have 4 parameter middleware then this is error handling middleware

app.use((error,req,res,next)=>{
    console.log("Error Caugth bye middleware :", err.message);
    req.status(req.StatusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error.!!"
    });
});


app.get("/",(req,res)=>{
    res.send("Home Page.!!");
});

// create custom error
app.get("/fail",(req,res,next)=>{
    const err = new Error("Something Went Wrong.!!");
    err.StatusCode = 400;
    next(err);
});


app.listen(port,()=>{
    console.log(`Server start on ${port}`);
});