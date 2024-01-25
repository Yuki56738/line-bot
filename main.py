import os

from flask import *

from linebot.v3 import *

from linebot.v3.exceptions import *
from linebot.v3.messaging import *
from linebot.v3.webhooks import *
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.environ.get('TOKEN')
SECRET = os.environ.get('SECRET')

app = Flask(__name__)
# @app.post('/')
# async def index():
#     return 200
configuration = Configuration(access_token=TOKEN)
handler = WebhookHandler(SECRET)
@app.post("/webhook")
def callback():
    signature = request.headers['X-Line-Signature']

    body = request.get_data(as_text=True)
    app.logger.info("Request body: " + body)


    # handle webhook body
    try:
        handler.handle(body, signature)
    except InvalidSignatureError:
        app.logger.info("Invalid signature. Please check your channel access token/channel secret.")
        abort(400)


@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
    with ApiClient(configuration) as api_client:
        line_bot_api = MessagingApi(api_client)
        line_bot_api.reply_message_with_http_info(
            ReplyMessageRequest(
                reply_token=event.reply_token,
                messages=[TextMessage(text=event.message.text)]
            )
        )


app.run(port=os.getenv('PORT', default=3000))
