const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const studentRouter = require('./Router/StudentRouter');
const companyRouter = require('./Router/companyRouter');
const JobRouter = require('./Router/JobRouter');
const cros = require('cors');


app.use(bodyParser.json());
app.use(cros());
app.use('/student',studentRouter);
app.use('/company',companyRouter);
app.use('/job',JobRouter);

if (app.get("env") === "production") {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
 }

app.listen(5000,()=>{
    console.log('Server is Listing at port 5000');
})

app.get('/',(req,res)=>{
    res.send('hello there!!!');
})