import discord

class MyClient(discord.Client):
    async def on_ready(self):
        print('Logged on as', self.user)

    async def on_message(self, message):
        # don't respond to ourselves
        if message.author == self.user:
            return

        if message.content == 'ping':
            await message.channel.send('pong')

intents = discord.Intents.default()
intents.message_content = True
client = MyClient(intents=intents)
client.run('MTAyODY0NTQ3MzAyOTk5NjY0NA.GrUcdL.9OzzoWQP6WMqtLTYHanjrR5vdljgR-jy8dWHo4')