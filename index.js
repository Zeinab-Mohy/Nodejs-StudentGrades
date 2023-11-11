
const express = require('express');
const app = express();
const router = require('./routes/students-routes');

app.use(express.json());
app.use('/api/students',router);

app.listen(5000,()=>{
    console.log('listening on port 5000');
})