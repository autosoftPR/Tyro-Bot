from email.quoprimime import quote
from urllib.parse import quote_plus
from webbrowser import get
import discord
import os
import requests
import json

client = discord.Client()

def get_quotes():
    response = requests.get("https://zenquotes.io/api/random")
    json_data = json.loads(response.text)
    quote = json_data [0], ["q"] + " -" + json_data [0], ["a"]
    return(quote)

@client.event
async def on_ready():
    print('We have logged in as {0.user}.format(client)')

@client.event
async def on_message(message):
    if message.author == client.user:
        return
    if message.content.startswith('$inspire'):
        quote = get_quotes()
        await message.channel.send(quote)

client.run(os.getenv('TOKEN'))