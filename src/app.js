const express = require("express");
const app = express();
const path = require("path")
const publicPath = path.resolve(__dirname, "./public")
const port = 3000
const indexRouter = require("./routes/index.routes") //agregado


app.listen(port, () => 
console.log('https://localhost:'+ port));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.use(express.static(publicPath));

app.use('/', indexRouter); //agregado
