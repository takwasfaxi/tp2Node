const express=require('express');
const app = express();

const voiture=require('./routes/voitures');
const router = require('./routes/voitures');
app.use('/voiture',voiture);


app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World!');
})




app.listen('3000',()=>{
    console.log('listening on port 3000');
})