const express = require('express');
const router = express.Router()
//const cors = require('cors')
data = require('./client.json')



router.post('/client', (req, res) => {
    //adding a client
    const client = req.body;
    data.push(client);
    // fs.writeFileSync("./clients.json", client);
    res.send(data);

});


module.exports = router;