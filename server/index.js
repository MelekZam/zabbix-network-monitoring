const express = require('express')
const app = express()
const port = 3000
const config = require('./config')
const client = require('twilio')(config.ACCOUNT_SID, config.AUTH_TOKEN)

// /login
//     - phone number
//     - channel (sms/call)

// /verify
//     - phone number
//     - code

app.get('/', (req, res) => {
    res.status(200).send({
        message: "You are on Homepage",
        info: {
            login: "Send verification code through /login . It contains two params i.e. phonenumber and channel(sms/call)",
            verify: "Verify the recieved code through /verify . It contains two params i.e. phonenumber and code"
        }
    }
)})

// Login Endpoint
app.get('/login', (req,res) => {
     if (req.query.phonenumber) {
        client
        .verify
        .services(config.SERVICE_ID)
        .verifications
        .create({
            to: `+${req.query.phonenumber}`,
            channel: req.query.channel==='call' ? 'call' : 'sms' 
        })
        .then(data => {
            res.status(200).send({
                message: "Verification is sent!!",
                phonenumber: req.query.phonenumber,
                data
            })
        }) 
     } else {
        res.status(400).send({
            message: "Wrong phone number :(",
            phonenumber: req.query.phonenumber,
            data
        })
     }
})

// Verify Endpoint
app.get('/verify', (req, res) => {
        client
            .verify
            .services(config.SERVICE_ID)
            .verificationChecks
            .create({
                to: `+${req.query.phonenumber}`,
                code: req.query.code
            })
            .then(data => {
                res.status(200).send(data)
            })
})

// listen to the server at 3000 port
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})