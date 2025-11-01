import express from 'express';

const app = express();
const PORT = 3300;
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});

app.get('/hello',(_req, res)=>{
    res.send('Hello Full Stack');
});