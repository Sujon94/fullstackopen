import express from 'express';
import calculate from "./calculateBmi";

const app = express();

app.get('/bmi',(req,res)=>{
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    res.send(calculate(height, weight));
})

const PORT = 3003;
app.listen(PORT,()=>`Server is running on port:${PORT}`);

