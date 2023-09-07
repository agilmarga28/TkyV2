
## 📑 Short Feature
- [x] Music
- [x] SlashCommand
- [x] Custom Filters
- [x] No Database Requirement
- [x] Easy to use

## 🎶 Support Source
- [x] Youtube
- [x] SoundCloud
- [x] Spotify (no api key anymore!)
- [x] Deezer
- [x] Twitch
- [x] Facebook
- [x] Apple
- [x] Bandcamp
- [x] Vimeo
- [x] Mixer
- [x] Https (Radio)

## 🚨 Have a Problem

✈ Discord:  [ ANONIM]



## 📎 Requirements

1. Node.js Version 16+ **[Download](https://nodejs.org/en/download/)**
2. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
3. Lavalink **[Guide](https://github.com/freyacodes/lavalink)** (switch back to default lavalink!)
- PT. Use my application.yml [PasteBin](https://pastebin.com/FwekJDuX) Fixed the issue of songs not matching the ones specified. 

## 🛑 Super Requirements 

1. Java 11-13 **[Download JDK13](http://www.mediafire.com/file/m6gk7aoq96db8g0/file)** (i use this here version)
2. Invite **[Access Invite](https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID&permissions=8&scope=bot%20applications.commands)** (replace CLIENT_ID to your bot client id!) for slashcommand!

## 📚 Installation

```
cd NanoSpace
npm install
```

## 🤖 Register SlashCommand

Invite **[Access Invite](https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID&permissions=8&scope=bot%20applications.commands)** (replace CLIENT_ID to your bot client id!) for slashcommand!

1. type `node registerSlash` to register in one guild!
2. type `node registerSlashGlobal` to register all guild! (but to need wait 1 - 2 hrs. or you can't wait pls kick bot and invite new!)

After installation finishes you can use `node .` to start the bot. or `Run Start.bat`

## 📄 Configuration

Copy or Rename `config.json.example` to `config.json` and fill out the values:

```json
{
	"PREFIX": "&",
	"TOKEN": "process.env.TOKEN",
	"OWNER_ID": "YOUR_CLIENT_ID",
	"CLIENT_ID": "YOUR_BOT_ID",
	"GUILD_ID": "YOUR_GUILD_ID",
	"NODES": [
		{ "host": "localhost", "port": 5555, "password": "123456" }
	]
}
```

## 🔩 Features & Commands

> Note: The default prefix is '&'

🎶 **Music Commands!** 

- Play (&play, & p, & pplay)
- Nowplaying (&nowplaying, & np, & now)
- Queue (&q)
- Repeat (&loop (current, all), & repeat (current, all))
- Loopqueue (&loopall, & lq, repeatall)
- Shuffle (&shuffle, mix)
- Volume control (&vol, & v)
- Pause (&pause, &pa)
- dst
