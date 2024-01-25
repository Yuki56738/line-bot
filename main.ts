import dotenv from 'dotenv'
import * as process from "process";
import * as line from '@line/bot-sdk'
console.log('Hello')

// @ts-ignore
// import * as process from "process";

require('dotenv').config()
// @ts-ignore
// console.log(process.env.CHANNEL_SECRET.toString())
const PORT = process.env.PORT || 3000
const channel_secret = process.env.CHANNEL_SECRET
const channel_access_token = process.env.CHANNEL_ACCESS_TOKEN

// @ts-ignore
// @ts-ignore
new line.messagingApi.MessagingApiClient({
    channelAccessToken: channel_access_token,


}
