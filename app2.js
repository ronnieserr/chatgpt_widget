const axios = require('axios');
const fs = require('fs');
const player = require('play-sound')(opts = {});

const options = {
  method: 'POST',
  url: 'https://api.apyhub.com/tts/text/file',
  headers: {
    'apy-token': 'APY06j6gVNgrqQm5mhwpjghWqtqi9gDyZOG6LOrH6Hj9V2MUz3DANgMPPFm357EO',
    'Content-Type': 'application/json'
  },
  data: { text: 'My name is John', gender: 'female' }
};

axios.request(options).then(function (response) {
  // Assuming response.data contains the file info
  const fileBuffer = Buffer.from(response.data, 'base64'); // Convert base64 to buffer

  // Save the file
  fs.writeFile('output.mp3', fileBuffer, (err) => {
    if (err) {
      console.error('Error saving the audio file:', err);
    } else {
      console.log('Audio file saved as output.mp3');

      // Play the saved audio file
      player.play('output.mp3', (err) => {
        if (err) {
          console.error('Error playing the audio file:', err);
        } else {
          console.log('Audio is playing...');
        }
      });
    }
  });
}).catch(function (error) {
  console.error('Error with the API request:', error);
});