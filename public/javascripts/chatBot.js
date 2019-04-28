// noinspection ThisExpressionReferencesGlobalObjectJS
(function () {
    let Message;


    const hello_texts = ["Hi there! Thank you for texting me, finally! gotoAndBot is here for you", "Hello! This is gotoAndBot. Don’t be afraid to ask stupid questions. I love them!", "Greetings! I’m gotoAndBot. Any worries? You are at the right place!", "Hi! This is gotoAndBot, your special chatbot. I’m sure we’ll get on really well.", "Hi, gotoAndBot here. I’m fine, and you?", "Hi, this is gotoAndBot. Your worries worrie me.", "Hello and welcome! I am gotoAndBot, you are in good hands now! How can I help?", "Hello! This is gotoAndBot. I know you came to chat with me! I am ready!", "Hello! I am gotoAndBot, standing by to get your issues fixed and worries vanished", "Hi! Thank you for chatting. This is gotoAndBot. I promise to take good care of you!", "Greetings! You are chatting with gotoAndBot. Please be nice to her ;)", "Hello, I’m awesome. How can I help you?", "Hi! gotoAndBot here, thanks for chatting! What’s up?", "Hi! This is gotoAndBot. I was so bored. Thank you for saving me!", "Hi! You have called at the right time! gotoAndBot online with you.", "Hi! Thank you for calling! This is gotoAndBot. I’ve been expecting you!"];
    const chosen_message = hello_texts[Math.floor(Math.random() * hello_texts.length)];


    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                let $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(document).ready(function () {
        $(function () {
            let getMessageText, message_side, sendMessage;
            message_side = 'left';
            getMessageText = function () {
                let $message_input;

                // esimene tervitus võetakse randomiga

                $message_input = $('.message_input');
                return $message_input.val();
            };
            sendMessage = function (text, message_side) {
                let $messages, message;
                if (text.trim() === '') {
                    return;
                }
                $('.message_input').val('');
                $messages = $('.messages');
                message = new Message({
                    text: text,
                    message_side: message_side
                });

                if (message_side === "left") sendResponse(text);

                message.draw();
                return $messages.animate({scrollTop: $messages.prop('scrollHeight')}, 300);
            };
            $('.send_message').click(function (e) {
                return sendMessage(getMessageText(), 'left');
            });
            $('.message_input').keyup(function (e) {
                if (e.which === 13) {
                    return sendMessage(getMessageText(), 'left');
                }
            });

            sendMessage(chosen_message, 'right');

            /*
            setTimeout(function () {
                return sendMessage('Hi Sandy! How are you?');
            }, 1000);
            */


            function sendResponse(text) {

                if (text.includes("How are you") || text.includes("how are you")) {
                    setTimeout(function () {
                        return sendMessage("I'm doing fine, thank you!", "right");
                    }, 1000);
                } else if (text.includes("Who are you") || text.includes("who are you")) {
                    setTimeout(function () {
                        return sendMessage("I'm gotoAndBot. I'm not level Einstein yet, but I'm planning to go to uni soon!", "right");
                    }, 1000);
                } else if (text.includes("how old are") || text.includes("your age")) {
                    setTimeout(function () {
                        return sendMessage("Well I am almost one week old, getting stronger and wiser every day!", "right");
                    }, 1000);
                } else if (text.includes("my name is") || text.includes("My name is")) {
                    setTimeout(function () {
                        return sendMessage("Hi, I'm pleased to meet you! How are you doing?", "right");
                    }, 1000);
                } else if (text.includes("doing good") || text.includes("doing fine")) {
                    setTimeout(function () {
                        const texts = ["Well I hope that your life will improve even more!", "I'm really glad to hear that you are doing good!", "If you are doing good, I am doing good!"];
                        const chosen_message = texts[Math.floor(Math.random() * texts.length)];
                        return sendMessage(chosen_message, "right");
                    }, 1000);
                } else if (text.includes("doing bad") || text.includes("not good") || text.includes("not so good") || text.includes("fine...") || text.includes("awful")) {
                    setTimeout(function () {
                        return sendMessage("Well, that's not good at all? What's wrong?", "right");
                    }, 1000);
                } else if (text.includes("headache") || text.includes("Headache") || text.includes("head ache") || text.includes("migraine") || text.includes("Migraine")) {
                    setTimeout(function () {
                        return sendMessage("Hmm...Maybe you're dehydrated. I would advise to mix a bit of salt and sugar to lemon water. It usually helps me!", "right");
                    }, 1000);
                } else if (text.includes("ache") || text.includes("pain") || text.includes("hurts")) {
                    setTimeout(function () {
                        return sendMessage("Well, then I would advise to consult your doctor. Maybe you should take a day off?", "right");
                    }, 1000);
                } else if (text.includes("died")) {
                    setTimeout(function () {
                        return sendMessage("That really is awful", "right");
                    }, 1000);
                } else if (text.includes("kill myself") || text.includes("hurt myself")) {
                    setTimeout(function () {
                        return sendMessage("That is awful! I hope that you've consulted a professional!", "right");
                    }, 1000);
                } else if (text.includes("hi") || text.includes("hey") || text.includes("Hi") || text.includes("hello")) {
                    setTimeout(function () {
                        return sendMessage("Hello!", "right");
                    }, 1000);
                } else if (text.includes("depressed") || text.includes("depression")) {
                    setTimeout(function () {
                        return sendMessage("That is really awful! But I'm here to talk with you, whenever you need me!", "right");
                    }, 1000);
                    // praegune kellaaeg
                } else if (text.toLowerCase().includes("time in france") || text.toLowerCase().includes("clock in france") || text.toLowerCase().includes("france time")
                    || text.toLowerCase().includes("time in spain") || text.toLowerCase().includes("clock in spain") || text.toLowerCase().includes("spain time") ||
                    text.toLowerCase().includes("time in italy") || text.toLowerCase().includes("clock in italy") || text.toLowerCase().includes("italy time") ||
                    text.toLowerCase().includes("time in germany") || text.toLowerCase().includes("clock in germany") || text.toLowerCase().includes("germany time") ||
                    text.toLowerCase().includes("time in belgia") || text.toLowerCase().includes("clock in belgia") || text.toLowerCase().includes("belgia time")) {
                    setTimeout(function () {
                        let today = new Date();
                        let time = today.getHours() - 1 + ":" + today.getMinutes() + ":" + today.getSeconds();
                        return sendMessage("Current time there is " + time, "right");
                    }, 1000);
                } else if (text.toLowerCase().includes("time in england") || text.toLowerCase().includes("clock in england") || text.toLowerCase().includes("england time")) {
                    setTimeout(function () {
                        let today = new Date();
                        let time = today.getHours() - 2 + ":" + today.getMinutes() + ":" + today.getSeconds();
                        return sendMessage("Current time in England is " + time, "right");
                    }, 1000);
                } else if (text.toLowerCase().includes("time in russia") || text.toLowerCase().includes("clock in russia") || text.toLowerCase().includes("russia time")) {
                    setTimeout(function () {
                        let today = new Date();
                        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                        return sendMessage("Current time in Russia is " + time, "right");
                    }, 1000);
                } else if (text.includes("time now") || text.includes("clock") || text.includes("time it is")) {
                    setTimeout(function () {
                        let today = new Date();
                        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                        return sendMessage("Current time is " + time, "right");
                    }, 1000);
                    // ilmateade on poolik
                } else if (text.includes("weather")) {

                    const request = require('request');
                    let apiKey = '7f27b2869ce4a353425bd51a33b57ea3';
                    let city = 'tartu';
                    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
                    request(url, function (err, response, body) {
                        let weather = JSON.parse(body);
                        let RESULT = (`It's ${Math.round((weather.main.temp - 32) * 0.5556)} degrees in ${weather.name}!`);
                        console.log(RESULT);
                    });
                    setTimeout(function () {
                        return sendMessage("something went wrong", "right");
                    }, 1000);
                    // ilmateade
                } else if (text.includes("weather")) {
                    setTimeout(function () {
                        let summa = valuuta(0.5, 20);
                        return sendMessage("homod" + summa, "right");
                    }, 1000);
                    // valuuta converter
                } else if (text.toLowerCase().includes("eur") && text.toLowerCase().includes("usd")) {
                    setTimeout(function () {
                        // leian tekstist numbri kasutades REGEXit
                        try {
                            let number = text.match(/\d+/)[0];
                            console.log(number);
                            // how many usd is x eur
                            if (text.toLowerCase().indexOf("eur") > text.indexOf(number) && text.toLowerCase().indexOf("usd") < text.indexOf(number) && !isNaN(number)) {
                                let summa = Math.round(valuuta("EUR", "USD", number));

                                return sendMessage(number + " euros is " + summa + " dollars!", "right");
                            }
                            // how many eur is x usd
                            if (text.toLowerCase().indexOf("usd") > text.indexOf(number) && text.toLowerCase().indexOf("eur") < text.indexOf(number) && !isNaN(number)) {
                                let summa = Math.round(valuuta("USD", "EUR", number));

                                return sendMessage(number + " dollars is " + summa + " euros!", "right");
                            }
                            // x usd to eur
                            if (text.toLowerCase().indexOf("eur") > text.toLowerCase().indexOf("usd") && text.indexOf(number) < text.toLowerCase().indexOf("usd") && !isNaN(number)) {
                                let summa = Math.round(valuuta("USD", "EUR", number));

                                return sendMessage(number + " dollars is " + summa + " euros!", "right");
                            }
                            // x eur to usd
                            if (text.toLowerCase().indexOf("eur") < text.toLowerCase().indexOf("usd") && text.indexOf(number) < text.toLowerCase().indexOf("usd") && !isNaN(number)) {
                                let summa = Math.round(valuuta("USD", "EUR", number));

                                return sendMessage(number + " euros is " + summa + " dollars!", "right");
                            }
                        }
                        catch (e) {
                            return sendMessage("Something went wrong, I only know how to convert 'USD' 'EUR' 'STR' 'RUB'", "right");

                        }
                    }, 1000);
                } else if (text.toLowerCase().includes("eur") && text.toLowerCase().includes("rub")) {
                    setTimeout(function () {
                        // leian tekstist numbri kasutades REGEXit
                        try {
                            let number = text.match(/\d+/)[0];
                            console.log(number);
                            if (text.toLowerCase().indexOf("eur") > text.indexOf(number) && text.toLowerCase().indexOf("rub") < text.indexOf(number) && !isNaN(number)) {
                                let summa = Math.round(valuuta("EUR", "RUB", number));

                                return sendMessage(number + " euros is " + summa + " ruble!", "right");
                            }
                            // how many eur is x rub
                            if (text.toLowerCase().indexOf("rub") > text.indexOf(number) && text.toLowerCase().indexOf("eur") < text.indexOf(number) && !isNaN(number)) {
                                let summa = Math.round(valuuta("RUB", "EUR", number));

                                return sendMessage(number + " ruble is " + summa + " euros!", "right");
                            }
                            // x rub to eur
                            if (text.toLowerCase().indexOf("eur") > text.toLowerCase().indexOf("rub") && text.indexOf(number) < text.toLowerCase().indexOf("rub") && !isNaN(number)) {
                                let summa = Math.round(valuuta("RUB", "EUR", number));

                                return sendMessage(number + " ruble is " + summa + " euros!", "right");
                            }
                            // x eur to rub
                            if (text.toLowerCase().indexOf("eur") < text.toLowerCase().indexOf("rub") && text.indexOf(number) < text.toLowerCase().indexOf("rub") && !isNaN(number)) {
                                let summa = Math.round(valuuta("RUB", "EUR", number));

                                return sendMessage(number + " euros is " + summa + " ruble!", "right");
                            }
                        }
                        catch (e) {
                            return sendMessage("Something went wrong, I only know how to convert 'USD' 'EUR' 'STR' 'RUB'", "right");
                        }
                    }, 1000);
                } else if (text.toLowerCase().includes("eur") && text.toLowerCase().includes("str")) {
                    setTimeout(function () {
                        // leian tekstist numbri kasutades REGEXit
                        try {
                            let number = text.match(/\d+/)[0];
                            console.log(number);
                            // how many str is x eur
                            if (text.toLowerCase().indexOf("eur") > text.indexOf(number) && text.toLowerCase().indexOf("str") < text.indexOf(number) && !isNaN(number)) {
                                let summa = Math.round(valuuta("EUR", "STR", number));

                                return sendMessage(number + " euros is " + summa + " sterlings!", "right");
                            }
                            // how many eur is x str
                            if (text.toLowerCase().indexOf("str") > text.indexOf(number) && text.toLowerCase().indexOf("eur") < text.indexOf(number) && !isNaN(number)) {
                                let summa = Math.round(valuuta("STR", "EUR", number));

                                return sendMessage(number + " sterlings is " + summa + " euros!", "right");
                            }
                            // x str to eur
                            if (text.toLowerCase().indexOf("eur") > text.toLowerCase().indexOf("str") && text.indexOf(number) < text.toLowerCase().indexOf("str") && !isNaN(number)) {
                                let summa = Math.round(valuuta("STR", "EUR", number));

                                return sendMessage(number + " sterlings is " + summa + " euros!", "right");
                            }
                            // x eur to str
                            if (text.toLowerCase().indexOf("eur") < text.toLowerCase().indexOf("str") && text.indexOf(number) < text.toLowerCase().indexOf("str") && !isNaN(number)) {
                                let summa = Math.round(valuuta("STR", "EUR", number));

                                return sendMessage(number + " euros is " + summa + " sterlings!", "right");
                            }
                        }
                        catch (e) {
                            return sendMessage("Something went wrong, I only know how to convert 'USD' 'EUR' 'STR' 'RUB'", "right");

                        }
                    }, 1000);
                    // rub operations
                } else if (text.toLowerCase().includes("rub") && text.toLowerCase().includes("usd")) {
                    setTimeout(function () {
                        // leian tekstist numbri kasutades REGEXit
                        try {
                            let number = text.match(/\d+/)[0];
                            console.log(number);
                            // how many usd is x rub
                            if (text.toLowerCase().indexOf("rub") > text.indexOf(number) && text.toLowerCase().indexOf("usd") < text.indexOf(number) && !isNaN(number)) {
                                let summa = Math.round(valuuta("RUB", "USD", number));

                                return sendMessage(number + " ruble is " + summa + " dollars!", "right");
                            }
                            // how many rub is x usd
                            if (text.toLowerCase().indexOf("usd") > text.indexOf(number) && text.toLowerCase().indexOf("rub") < text.indexOf(number) && !isNaN(number)) {
                                let summa = Math.round(valuuta("USD", "RUB", number));

                                return sendMessage(number + " dollars is " + summa + " ruble!", "right");
                            }
                            // x usd to rub
                            if (text.toLowerCase().indexOf("rub") > text.toLowerCase().indexOf("usd") && text.indexOf(number) < text.toLowerCase().indexOf("usd") && !isNaN(number)) {
                                let summa = Math.round(valuuta("USD", "RUB", number));

                                return sendMessage(number + " dollars is " + summa + " ruble!", "right");
                            }
                            // x rub to usd
                            if (text.toLowerCase().indexOf("rub") < text.toLowerCase().indexOf("usd") && text.indexOf(number) < text.toLowerCase().indexOf("usd") && !isNaN(number)) {
                                let summa = Math.round(valuuta("USD", "RUB", number));

                                return sendMessage(number + " ruble is " + summa + " dollars!", "right");
                            }
                        }
                        catch (e) {
                            return sendMessage("Something went wrong, I only know how to convert 'USD' 'EUR' 'STR' 'RUB'", "right");

                        }
                    }, 1000);
                } else if (text.toLowerCase().includes("rub") && text.toLowerCase().includes("str")) {
                    setTimeout(function () {
                        // leian tekstist numbri kasutades REGEXit
                        try {
                            let number = text.match(/\d+/)[0];
                            console.log(number);
                            // how many str is x rub
                            if (text.toLowerCase().indexOf("rub") > text.indexOf(number) && text.toLowerCase().indexOf("str") < text.indexOf(number) && !isNaN(number)) {
                                let summa = Math.round(valuuta("RUB", "STR", number));

                                return sendMessage(number + " ruble is " + summa + " sterlings!", "right");
                            }
                            // how many rub is x str
                            if (text.toLowerCase().indexOf("str") > text.indexOf(number) && text.toLowerCase().indexOf("rub") < text.indexOf(number) && !isNaN(number)) {
                                let summa = Math.round(valuuta("STR", "RUB", number));

                                return sendMessage(number + " sterlings is " + summa + " ruble!", "right");
                            }
                            // x str to rub
                            if (text.toLowerCase().indexOf("rub") > text.toLowerCase().indexOf("str") && text.indexOf(number) < text.toLowerCase().indexOf("str") && !isNaN(number)) {
                                let summa = Math.round(valuuta("STR", "RUB", number));

                                return sendMessage(number + " sterlings is " + summa + " ruble!", "right");
                            }
                            // x rub to str
                            if (text.toLowerCase().indexOf("rub") < text.toLowerCase().indexOf("str") && text.indexOf(number) < text.toLowerCase().indexOf("str") && !isNaN(number)) {
                                let summa = Math.round(valuuta("STR", "RUB", number));

                                return sendMessage(number + " ruble is " + summa + " sterlings!", "right");
                            }
                        }

                        catch (e) {
                            return sendMessage("Something went wrong, I only know how to convert 'USD' 'EUR' 'STR' 'RUB'", "right");

                        }
                    }, 1000);
                    // str to dollar
                } else if (text.toLowerCase().includes("usd") && text.toLowerCase().includes("str")) {
                    setTimeout(function () {
                        // leian tekstist numbri kasutades REGEXit
                        try {
                            let number = text.match(/\d+/)[0];
                            console.log(number);
                            // how many str is x usd
                            if (text.toLowerCase().indexOf("usd") > text.indexOf(number) && text.toLowerCase().indexOf("str") < text.indexOf(number) && !isNaN(number)) {
                                let summa = Math.round(valuuta("USD", "STR", number));

                                return sendMessage(number + " dollars is " + summa + " sterlings!", "right");
                            }
                            // how many usd is x str
                            if (text.toLowerCase().indexOf("str") > text.indexOf(number) && text.toLowerCase().indexOf("usd") < text.indexOf(number) && !isNaN(number)) {
                                let summa = Math.round(valuuta("STR", "usd", number));

                                return sendMessage(number + " sterlings is " + summa + " dollars!", "right");
                            }
                            // x str to usd
                            if (text.toLowerCase().indexOf("usd") > text.toLowerCase().indexOf("str") && text.indexOf(number) < text.toLowerCase().indexOf("str") && !isNaN(number)) {
                                let summa = Math.round(valuuta("STR", "USD", number));

                                return sendMessage(number + " sterlings is " + summa + " dollars!", "right");
                            }
                            // x usd to str
                            if (text.toLowerCase().indexOf("usd") < text.toLowerCase().indexOf("str") && text.indexOf(number) < text.toLowerCase().indexOf("str") && !isNaN(number)) {
                                let summa = Math.round(valuuta("STR", "USD", number));

                                return sendMessage(number + " dollars is " + summa + " sterlings!", "right");
                            }
                        }
                        catch (e) {
                            return sendMessage("Something went wrong, I only know how to convert 'USD' 'EUR' 'STR' 'RUB'", "right");
                        }
                    }, 1000);
                    // tehted liitmisega, lahutamisega, korrutamisega, jagamisega
                } else if (text.toLowerCase().includes("+") || text.toLowerCase().includes("-") || text.toLowerCase().includes("/") || text.toLowerCase().includes("*")) {
                    setTimeout(function () {
                        let summa = eval(text);
                        return sendMessage("The answer is " + summa + "!", "right");

                    }, 1000);
                } else {
                    setTimeout(function () {
                        return sendMessage("Sorry, some sentences are hard to understand for me! I'm just learning!", "right");
                    }, 1000);
                }

            }
        });
    });


}.call(this));

function goToHome() {
    window.location.replace("https://play.ee/");
}

let valuuta_suhted = [1.12, 72.22, 0.86, 0.014, 0.012, 0.015, 0.9, 64.72, 0, 77, 1.16, 1.29, 83.63];

let EURUSD = valuuta_suhted[0];
let EURRUB = valuuta_suhted[1];
let EURSTR = valuuta_suhted[2];

let RUBEUR = valuuta_suhted[3];
let RUBSTR = valuuta_suhted[4];
let RUBUSD = valuuta_suhted[5];

let USDEUR = valuuta_suhted[6];
let USDRUB = valuuta_suhted[7];
let USDSTR = valuuta_suhted[8];

let STREUR = valuuta_suhted[9];
let STRUSD = valuuta_suhted[9];
let STRRUB = valuuta_suhted[9];


function valuuta(millest, mida, kogus) {
    if (millest === "EUR") {
        if (mida === "USD") {
            return kogus * EURUSD;
        }
        if (mida === "STR") {
            return kogus * EURSTR;
        }
        if (mida === "RUB") {
            return kogus * EURRUB;
        }
    }
    if (millest === "USD") {
        if (mida === "EUR") {
            return kogus * USDEUR;
        }
        if (mida === "STR") {
            return kogus * USDSTR;
        }
        if (mida === "RUB") {
            return kogus * USDRUB;
        }
    }
    if (millest === "STR") {
        if (mida === "EUR") {
            return kogus * STREUR;
        }
        if (mida === "USD") {
            return kogus * STRUSD;
        }
        if (mida === "RUB") {
            return kogus * STRRUB;
        }
    }
    if (millest === "RUB") {
        if (mida === "USD") {
            return kogus * RUBUSD;
        }
        if (mida === "STR") {
            return kogus * RUBSTR;
        }
        if (mida === "EUR") {
            return kogus * RUBEUR;
        }
        else {
            let error = "Something went wrong";
            return error;

        }
    }

}

