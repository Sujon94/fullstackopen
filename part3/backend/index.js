const express = require('express')
const app = express()

let notes = [
    {
        id: "1",
        content: "HTML is really easy",
        important: true
    },
    {
        id: "2",
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: "3",
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
];
app.use(express.json());
/*Defining routes*/
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})
/*Fetch a data*/
app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id;
    const note = notes.find(n => n.id === id);
    if (note) {
        response.json(note);
    } else {
        //response.json([{'message':'Note not found.'}]);
        //response.statusMessage = "Note not found.";
        response.status(404).send("Note not found.");
    }
});

/*Delete a data*/
app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id;
    notes = notes.filter(n => n.id !== id);

    response.status(204).end();
})
const generateId = ()=>{
    return String((notes.length > 0 ? Math.max(...notes.map(n=>Number(n.id))) :0)+1);
}
/*Post a note*/
app.post('/api/notes', (request, response) => {
    const body = request.body;
    if (!body.content){
        return response.status(400).json({
            error:"Content is missing"
        });
    }

    const note = {
        content:body.content,
        important: Boolean(body.important) || false,
        id:generateId()
    }

    notes = notes.concat(note);
    response.json(note);
})

const port = 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

