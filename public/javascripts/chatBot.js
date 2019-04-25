(function () {
    let Message;
    const WEATHER_API_KEY = "7f27b2869ce4a353425bd51a33b57ea3";

    const hello_texts = ["Hi there! Thank you for texting me, finally! gotoAndBot is here for you", "Hello! This is gotoAndBot. Don’t be afraid to ask stupid questions. I love them!", "Greetings! I’m gotoAndBot. Any worries? You are at the right place!", "Hi! This is gotoAndBot, your special chatbot. I’m sure we’ll get on really well.", "Hi, gotoAndBot here. I’m fine, and you?", "Hi, this is gotoAndBot. Your worries worrie me.", "Hello and welcome! I am gotoAndBot, you are in good hands now! How can I help?", "Hello! This is gotoAndBot. I know you came to chat with me! I am ready!", "Hello! I am gotoAndBot, standing by to get your issues fixed and worries vanished", "Hi! Thank you for chatting. This is gotoAndBot. I promise to take good care of you!", "Greetings! You are chatting with gotoAndBot. Please be nice to her ;)", "Hello, I’m awesome. How can I help you?", "Hi! gotoAndBot here, thanks for chatting! What’s up?", "Hi! This is gotoAndBot. I was so bored. Thank you for saving me!", "Hi! You have called at the right time! gotoAndBot online with you.", "Hi! Thank you for calling! This is gotoAndBot. I’ve been expecting you!"];
    const chosen_message = hello_texts[Math.floor(Math.random() * hello_texts.length)];

    function getWeather() {

        let Weather = require('weather-js');
        Weather.getCurrent("Kansas City", function (current) {
            return "currently: " + current.temperature() + " and " + current.conditions() + ""
        });
    }

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

            } else if (text.includes("www")) {
                setTimeout(function () {
                    return sendMessage("Weather is " + getWeather(), "right")
                }, 1000);
                // ilmateade
            } else if (text.includes("weather")) {
                setTimeout(function () {

                    return sendMessage("WOW", "right");
                }, 1000);

            } else {
                setTimeout(function () {
                    return sendMessage("Sorry, some sentences are hard to understand for me! I'm just learning!", "right");
                }, 1000);
            }

        }
    });


}.call(this));

function goToHome() {
    window.location.replace("https://play.ee/");
}
