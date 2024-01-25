import dotenv from 'dotenv'
import * as process from "process";
import * as line from '@line/bot-sdk'
import {messagingApi} from "@line/bot-sdk";
import * as https from "https";

const express = require('express')
console.log('Hello')

import * as crypto from "crypto"
import * as repl from "repl";
// const crypto = require('crypto')

// @ts-ignore
// import * as process from "process";

require('dotenv').config()
// @ts-ignore
// console.log(process.env.CHANNEL_SECRET.toString())
const PORT = process.env.PORT || 3000
const channel_secret = process.env.CHANNEL_SECRET!
const TOKEN = process.env.CHANNEL_ACCESS_TOKEN!

// @ts-ignore
// function validate_signature(signature, body) {
//     return signature = crypto.createHmac('sha256', channel_secret!)
// }
const app = express()

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)
// @ts-ignore
// new line.messagingApi.MessagingApiClient({
//     channelAccessToken: TOKEN
//
// }
// @ts-ignore
app.get("/", (req, res) => {
    res.return(200)
    // if(validate_signature(res.headers['x-line-signature'], req.body)){
    //     const signature = crypto
    //         .createHmac("SHA256", channel_secret)
    //         .update(res)
    //         .digest("base64")
    // }
    // res.sendStatus(200)
})
// @ts-ignore
// let dataString;

app.post("/webhook", function (req: any, res: any) {
    res.send("HTTP post request was sent.")
    // if(validate_signature(res.headers['x-line-signature'], req.body)){
    //     const signature = crypto
    //         .createHmac("SHA256", channel_secret)
    //         .update(res)
    //         .digest("base64")
    // }
    console.log(`Request from: ${req.originalUrl.toString()}`)
    // @ts-ignore
    let dataString
    if (req.body.events[0].type === "message") {
        dataString = JSON.stringify({

            replyToken: req.body.events[0].replyToken,
            messages: [
                {
                    'type': 'text',
                    'text': 'Hello, user!'
                }
            ]
        })
        // dataString = JSON.stringify({
        //     replyToken: // @ts-ignore
        //     req.body.events[0].replyToken,

        // })

    }

    const headers = {
        "Contest-Type": "application/json",
        Authorization: "Bearer" + TOKEN
    }
    const webhookOptions = {
        hostname: "api.line.me",
        path: "/v2/bot/message/reply",
        method: "POST",
        headers: headers,
        body: dataString!,
    }
    const request = https.request(webhookOptions, (res) => {
        res.on("data", (d) => {
            process.stdout.write(d)
        })
    })
    request.on('error', (err) => {
        console.error(err)
    })
    request.write(dataString)
    request.end()
})

app.listen(PORT, () => {
    console.log(`App listening port ${PORT}`)
})

