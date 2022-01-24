const express = require('express');
const app = express();
// const port = 5000;
const authRoute = require('./routes/auth-routes');
const postRoute = require('./routes/post-route');
const userRoute = require('./routes/user-route');
require('dotenv').config();
const port = process.env.PORT;
require('./db/mongodb');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',authRoute);
app.use('/api',postRoute);
app.use('/api',userRoute);

app.listen(port, ()=>{
    console.log("Server is running on port: ", port);
});