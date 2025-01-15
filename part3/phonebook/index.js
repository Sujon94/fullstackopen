const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');
app.use(express.json());

//Custom token to log the request body
morgan.token('body', (req, res) => {
    return JSON.stringify(req.body);
});
const customFormat = ':method :url :status :res[content-length] - :response-time ms :body';
app.use(morgan(customFormat/*, {
    stream: {
        write: (message, req) => {
            const match = message.match(/:method :url :status :res[^\s]+/);
            if (match && req.method === 'POST') {
                const postData = JSON.stringify(req.body);
                console.log(`${match[0]} - ${postData}`);
            } else {
                console.log(message);
            }
        }
    }
}*/));

const port = 3001;

let persons = JSON.parse(fs.readFileSync('persons.json','utf-8'));

/*
Routes*/
app.get('/api/persons', (request, response) => {
    response.json(persons);
});

app.get('/info', (request, response) => {
    const phoneBookEntries = persons.length;
    const currentDate = new Date();
    response.send(`Phonebook has info for ${phoneBookEntries} people <br> ${currentDate}`);
});

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id;
    const person = persons.find(p => p.id === id);
    if (person)
        response.json(person);
    else
        response.status(400).send("Person not found.");
})

app.delete('/api/persons/:id',(Request, Response)=>{
    const id = Request.params.id;
    let person = persons.find(p=> p.id === id);
    if (person){
        let filterData = persons.filter(p=> p.id !== id);
        fs.writeFileSync('persons.json',JSON.stringify(filterData,null,2))
        Response.json(filterData);
    }else{
        Response.status(400).send("Person not found");
    }
})

const generateId = () =>{
    return String((persons.length > 0 ? Math.max(...persons.map(p=>Number(p.id))) : 0)+1);
}

app.post('/api/persons',(request, response)=>{
    const data = request.body;
    if (!data.name){
        return response.status(400).json({"error": "Name is missing."});
    }else if(!data.number){
        return response.status(400).json({"error":"Number is missing."})
    }else{
        let person = persons.find(p=> p.name === data.name );
        if (person){
            return response.status(400).json({"error":"Name must be unique."});
        }else{
            let newPerson = {
                "id": generateId(),
                "name":data.name,
                "number":data.number
            };

            persons = persons.concat(newPerson);
            fs.writeFileSync("persons.json",JSON.stringify(persons,null,2));

            return response.json(persons);
        }
    }
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});