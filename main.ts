import * as dotenv from "dotenv";
// @ts-ignore
import {MessageClient} from "messaging-api-line";
// @ts-ignore
import server from "./server";

dotenv.config()
// @ts-ignore
const TOKEN = process.env.TOKEN
// @ts-ignore
const SECRET = process.env.SECRET

// @ts-ignore
const port = process.env.PORT || 3000

server.listing(port, () =>{
    console.log(`Listening on: ${port}`)
})
