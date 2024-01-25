import dotenv from 'dotenv'

console.log('Hello')

// @ts-ignore
// import * as process from "process";

require('dotenv').config()
// @ts-ignore
console.log(process.env.CHANNEL_SECRET.toString())
