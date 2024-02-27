const express = require('express');
const app = express();
const path = require('path');

const publicFolderPath = path.resolve(__dirname, '/public');
app.use(express.static(publicFolderPath));

app.listen(3000, ()=>{
    console.log("El servidor funciona bien.")
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});
