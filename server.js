//installing Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const serveStatic = require('serve-static')
const cors = require('cors')

const path = require('path')

//importing json
let data = require('./server/client.json')

//running express
const app = express()

//using cors
app.use(cors())

//configuring body parser middle ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//import get routes
const getRoutes = require('./server/gets')
app.use('/', getRoutes)

//import post routes
const postRoutes = require('./server/posts')
app.use('/', postRoutes)

//import delete routes
const deleteRoutes = require('./server/deletes')
app.use('/', deleteRoutes)


//importing put routes
const updateRoutes = require('./server/puts')
app.use('/', updateRoutes)


app.use('/', serveStatic(path.join(__dirname, '/public')))



const port = process.env.port || 3000

app.listen(port, ()=> {
    console.log(`App is running on ${port}`);
})