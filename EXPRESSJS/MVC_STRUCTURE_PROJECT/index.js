import express from 'express';
import homeRoutes from './routes/homeRoutes.js'

const port = 3002;

const app = express();
app.set('view engine','ejs');

app.use('/', homeRoutes);

app.listen(port,()=>{
    console.log(`server runing on port ${port}`);
})