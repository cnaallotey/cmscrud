const express = require('express');
const router = express.Router()
//const cors = require('cors')
data = require('./client.json')


//loading all clients
router.get('/loadclient', (req, res)=>{
    res.json(data)
    //console.log('Clients have been Loaded')
})

//editlient
router.get('/client/editclient/:id', (req, res)=> {
 const deleteQuery = req.params.id;
    const updateData = data.filter(i => 
        i.id === deleteQuery)
    res.send(updateData)
})

module.exports= router;