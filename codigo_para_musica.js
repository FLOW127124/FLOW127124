//necesitaremos el modulo "discord-music-system-es"
const MusicBot = require('discord-music-system-es');
 
const bot = new MusicBot({
    botPrefix: 'Prefix', // Ejemplo: !
    ytApiKey: 'APIKEY_YT', // Video de como obtener tu API KEY: https://www.youtube.com/watch?v=VqML5F8hcRQ
    botClient: client 
});
 
client.on('message', message => { // Cuando un el bot recibe un mensaje
    if(message.content.startsWith('!')) { // Si el mensaje empieza con su prefijo
        bot.onMessage(message); // discord-music-system lee si es un comando de m�sica o no
    };
});

//Imagenes del modulo en funcionamiento: https://imgur.com/a/ij3ZOXU
Si tienes problemas, me puedes contactar por privado ya que yo desarrolo el modulo de m�sica, a continuaci�n te dejo los comandos de m�sica
PLAY:

- play,
- add,
- join
  + <Letra de la canci�n | video URL | playlist URL>

STOP

- stop
- kill
- destroy
- leave

NOW PLAYING

- np
- nowplaying
- current

SKIP

- skip
- next
- >>

QUEUE

- queue
- list
- show

VOLUME

- volumen
- setvolumen

+ <n�mero valido del 0 al 100>

PAUSE
- pause

RESUME
- resume

REMOVE
- remove
- delete
+ <un n�mero valido de la lista de reproducci�n>


//si te gusto y/o te sirvio dejame un like, lo agradecer�a mucho :D
