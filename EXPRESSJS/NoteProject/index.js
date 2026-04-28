import express from 'express';

const port = 3002;
const notes = [];


const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        success: true,
        data: notes
    });
});

app.post("/notes",(req,res)=>{
    const { title , content } = req.body;
    const newNote = { 
        id: notes.length + 1,
        title,content
    };

    notes.push(newNote);
    res.status(201).json({
        success: true,
        message: 'Note Added Successfully.!!',
        data:newNote,
    });
});

app.get("/notes/:id", (req,res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));

    if(!note){
        return res.status(404).json({
            success: false,
            message: 'Not Found.!!'
        });
    }

    res.json({
        success : true,
        data : note
    });
});

app.put("/notes/:id", ( req, res ) => {
     const note = notes.find( n=> n.id === parseInt(req.params.id)  );
    
     if(!note){
        return res.status(404).json({
            success:false,
            message:"NOT FOUND.!!"
        });
     };

     const { title, content } = req.body ;
     note.title = title || note.title ;
     note.content = content || note.content ;

     res.json({
        success: true,
        message: "Updated Successfully.!!",
        data: note
     });
});

app.delete("/notes/:id", (req,res) =>{
    const index = notes.findIndex(n => n.id === parseInt(req.params.id));

if(index === -1){
    return res.status(404).json({
        success: false,
        message: "NOTE NOT FOUND.!!"
    });
}

const deleted = notes.splice(index,1);
    res.json({
        success: true,
        message: 'NOTE DELETED SUCCESSFULLY.!!',
        data: deleted
    });
});



app.listen(port,()=>{
    console.log(`Server Start on http://localhost:${port}`);
});