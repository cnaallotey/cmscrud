const express = require('express')
const router = express.Router()
//const cors = require('cors')
data = require('./client.json')


//delete a client
router.delete('/client/:id', (req, res) => {
    //const clientId = req.body
    //console.log(clientId)
    const query = req.params.id;
    //console.log(query)
    
    data = data.filter(i => i.id !== query);
    console.log(data)
    res.send("client has been deleted");
    console.log("client has been deleted");


})

module.exports = router;
