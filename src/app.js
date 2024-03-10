const express = require("express");
const app = express();
const path = require("path");
const port = 3000
const indexRouter = require("./routes/index.routes")


app.listen(port, () => 
console.log('https://localhost:'+ port));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.use(express.static('public'));

app.use('/', indexRouter);
