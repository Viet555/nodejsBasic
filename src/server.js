const express = require('express')
const app = express() //framwork giup chay dc 1 websv
require('dotenv').config();
const webRoutes = require('./routes/web')
const connection = require('./config/database')


const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const configViewEngine = require('./config/viewEngine')

//config req.body => laasy len data
app.use(express.json()) //for json
app.use(express.urlencoded({ extends: true })) //for  form data 

//config viewEngine
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);
// test connection
// Create the connection to database

// connection.query(
//     'select * from Users',
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server

//         console.log(fields); // fields contains extra meta data about results, if available

//     }
// );


app.listen(port, hostname, () => {
    console.log(`example app listening on port ${port}`)
})