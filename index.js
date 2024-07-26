const express = require('express');
const app=express();
const cors = require('cors')
const createDataRoute=require("./routes/createData");
const getDataRoute=require("./routes/getData");
app.use(cors())

 

app.use(express.json())
require('dotenv').config()
 

//connection with database
const connectionDB=require('./dbConnection/connection');

connectionDB();


app.use(createDataRoute);
app.use(getDataRoute);



const port=process.env.PORT;
 app.listen(port, () => {
    console.log(`Server started on ${port}`);
 });