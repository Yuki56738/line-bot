import * as dotenv from "dotenv";
// @ts-ignore
import {MessageClient} from "messaging-api-line";
// @ts-ignore
import * as server from "./server";

import {line, router} from "bottender/router";
import {Context} from "bottender";

dotenv.config()
// @ts-ignore
const TOKEN = process.env.TOKEN
// @ts-ignore
const SECRET = process.env.SECRET

// @ts-ignore
const port = process.env.PORT || 3000

function App(){
    return router([
        line.message(HandleMessage)
    ])
}

async function HandleMessage(context: Context){
    // @ts-ignore
    context.response('Hello')
}
server.listen(port, () =>{
    console.log(`Listening on: ${port}`)
})
