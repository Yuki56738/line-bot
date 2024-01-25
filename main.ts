import dotenv from 'dotenv'
import * as process from "process";

console.log('Hello')

// @ts-ignore
// import * as process from "process";

require('dotenv').config()
// @ts-ignore
// console.log(process.env.CHANNEL_SECRET.toString())
const PORT = process.env.PORT || 3000
const channel_secret = process.env.CHANNEL_SECRET


