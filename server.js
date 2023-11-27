const express = require('express');
const { Client } = require('discord.js');

const app = express();
const client = new Client();

// Dodaj swój token bota Discord
const BOT_TOKEN = 'MTE3MDQwNjUxNzAwMjk5MzY2NQ.GXwfs0.-_vDsk04e_T07s-tr2GCwbz6Cv5am3TrU3cSw0';

// Reakcja na zdarzenie gotowości bota
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Prosty przykład komendy - "ping"
client.on('message', (message) => {
  if (message.content.toLowerCase() === '!ping') {
    message.reply('Bot działa poprawnie');
  }
});

// Obsługa błędów
client.on('error', console.error);

// Uruchomienie bota Discord
client.login(BOT_TOKEN);

// Utworzenie serwera HTTP na Glitch, aby utrzymać aplikację aktywną
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

// Pamiętaj, aby zapobiegać zatrzymywaniu projektu z powodu braku aktywności
setInterval(() => {
(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000); // Pinguj co 4.5 minuty (280000 milisekund)
