const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://api.apyhub.com/tts/text/file',
  headers: {
    'apy-token': 'APY06j6gVNgrqQm5mhwpjghWqtqi9gDyZOG6LOrH6Hj9V2MUz3DANgMPPFm357EO',
    'Content-Type': 'application/json'
  },
  data: {text: 'My name is John', gender: 'female'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});