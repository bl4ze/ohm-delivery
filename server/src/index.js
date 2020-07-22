const shortid = require('shortid')
var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const Utils = require('./utils');
app.use(bodyParser.json())

function serve() {
    app.get('/ohms/:id', async (req, res) => {
        const ohm = await Utils.getOhmByTrackingId(req.params.id);
        console.log(ohm)
        res.send(ohm);
    })

    app.listen(3000, () => console.log('listening on port 3000'));
}

serve();