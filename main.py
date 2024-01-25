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

signature = request.headers['X-Line-Signature']

body = request.get_data(as_text=True)
app.logger.info("Request body: " + body)

configuration = Configuration(access_token=TOKEN)
handler = WebhookHandler(SECRET)
# handle webhook body
try:
    handler.handle(body, signature)
except InvalidSignatureError:
    app.logger.info("Invalid signature. Please check your channel access token/channel secret.")
    abort(400)

if __name__ == '__main__':
    app.run(port=os.environ.get('PORT') or 3000)