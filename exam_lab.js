const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/object', (req, res, next)=>{
    let obj = {name: 'John'};
    res.send(obj)
});
app.use('/pdf', (req, res, next)=>{
    res.set('Content-type', 'application/pdf');
    res.contentType('application/pdf');
    res.sendFile(__dirname + 'lecture.pdf');
});
app.get('/', (req, res, next)=>{
    let arr = [1, 2, 3];
    res.send(arr);
});
app.use((req, res, next)=>{
    throw new Error('Not found')
});
app.use((err, req, res, next)=> {
    res.send(err);
});
app.listen(3000, () => console.log('Server running at 3000...'))