const express = require('express');
const router = express.Router()
//const cors = require('cors')
data = require('./client.json')



router.post('/client', (req, res) => {
    //adding a client
    const client = req.body;
    data.push(client);
    // fs.writeFileSync("./clients.json", client);

    //console.log(client);
    res.send('client has been added');

});


module.exports = router;