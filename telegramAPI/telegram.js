const telegram = require('telegram-bot-api');

const telegramApi = new telegram({
    token: '<PUT YOUR TOKEN HERE>'
});

telegramApi.getMe()
    .then(function(data)
    {
        console.log(data);
    })
    .catch(function(err)
    {
        console.log(err);
    });

module.exports = {
    telegramApi
};

