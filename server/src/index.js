const shortid = require('shortid')
var express = require('express')
var app = express()
const bodyParser = require('body-parser')
const Utils = require('./utils')
const utils = require('./utils')
const { updateOhm } = require('./utils')
app.use(bodyParser.json())

function serve() {
    app.get('/ohms/:trackingId', async (req, res) => {
        try{
            const ohm = await Utils.getOhmByTrackingId(req.params.trackingId)
            res.send(ohm)
        }catch(err){
            return res.status(500).json({ error: 'error getting ohm' })
        }
    })

    app.put('/ohms/:trackingId', async (req, res) => {
        try {
            const ohm = await Utils.getOhmByTrackingId(req.params.trackingId)

            if(utils.validateStatusChange(ohm.status, req.body.ohm.status)){

                const updatedHistory = [...req.body.ohm.history, {state: req.body.ohm.status, at: Date.now()}]

                await Utils.updateOhm(req.params.trackingId, {...req.body.ohm, history: updatedHistory})

                res.send(true)
            }else{
                return res.status(400).json({ error: 'invalid status transition' })
            }
            
        }catch(err){
            return res.status(500).json({ error: 'error updating ohm' })
        }
       
    })

    app.listen(3000, () => console.log('listening on port 3000'))
}

serve()