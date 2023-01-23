const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const route = require('./router');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());

app.get('/', (req,res)=>{
    res.status(200).send('Museum Pool');
   // console.log('ok');

})

app.use('/api', route);
app.use((err, req, res, next) => {
    // console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

app.listen(3001,()=>{
    console.log('app running 3001');
})