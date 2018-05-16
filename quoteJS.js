//FOR BODY BACKGROUND COLOR 
document.body.style.backgroundColor = "#E7CACA";

//ALL QUOTES
function changeQ() {
    var quotes = ["Be yourself; everyone else is already taken. <br> ― Oscar Wilde ―",
    "Don't cry because it's over, smile because it happened. <br> ― Dr. Seuss ―",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. <br> ― Albert Einstein ―",
    "A room without books is like a body without a soul. <br> ― Marcus Tullius Cicero ―",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams. <br> ― Dr. Seuss ―",
    "You only live once, but if you do it right, once is enough. <br> ― Mae West ―",
    "Be the change that you wish to see in the world. <br> ― Mahatma Gandhi ―",
    "A friend is someone who knows all about you and still loves you.<br> ― Elbert Hubbard ―",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. <br> ― Maya Angelou ―",
    "Always forgive your enemies; nothing annoys them so much.<br> ― Oscar Wilde ―",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. <br> ― Mahatma Gandhi ―",
    "To live is the rarest thing in the world. Most people exist, that is all. <br> ― Oscar Wilde ―",
    "I am so clever that sometimes I don't understand a single word of what I am saying. <br> ― Oscar Wilde, The Happy Prince and Other Stories ― ",
    "Without music, life would be a mistake. <br> ― Friedrich Nietzsche, Twilight of the Idols ― ",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. <br> ― Ralph Waldo Emerson ―",
    "We accept the love we think we deserve.<br> ― Stephen Chbosky, The Perks of Being a Wallflower ― ",
    "It is better to be hated for what you are than to be loved for what you are not. <br>― André Gide, Autumn Leaves ― ",
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.<br> ― Albert Einstein ―",
    "Life is what happens to us while we are making other plans. <br>― Allen Saunders ―",
    "The fool doth think he is wise, but the wise man knows himself to be a fool.<br> ― William Shakespeare, As You Like It ― ",
    "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present. <br>― Bil Keane ―",
    "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.<br> ― Neil Gaiman, Coraline ― ",
    "A woman is like a tea bag; you never know how strong it is until it's in hot water. <br>― Eleanor Roosevelt ―",
    "I have not failed. I've just found 10,000 ways that won't work. <br>― Thomas A. Edison ―",
    "The man who does not read has no advantage over the man who cannot read.<br> ― Mark Twain ―",
    "If you don't stand for something you will fall for anything.<br> ― Gordon A. Eadie ―",
    "It is not a lack of love, but a lack of friendship that makes unhappy marriages.<br> ― Friedrich Nietzsche ―",
    "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.<br> ― Dr. Seuss ―",
    "A day without sunshine is like, you know, night.<br> ― Steve Martin ―",
    "That which does not kill us makes us stronger.<br> ― Friedrich Nietzsche ―",
    "For every minute you are angry you lose sixty seconds of happiness.<br> ― Ralph Waldo Emerson ―",
    "If you can't explain it to a six year old, you don't understand it yourself. <br>― Albert Einstein ―",
    "Everything you can imagine is real. <br>― Pablo Picasso ―",
    "Sometimes the questions are complicated and the answers are simple. <br>― Dr. Seuss ―",
    "All you need is love. But a little chocolate now and then doesn't hurt.<br> ― Charles M. Schulz ―",
    ];

    //    var i = "<br>";
    //    while (i <= quotes.length){
    //        quotes.splice(i, "<br> ― ", 0);
    //        i += 2;
    //    }
    //    console.log(quotes);

    //RANDOMIZER FOR QUOTES    
    var rand = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("result").innerHTML = rand;
}

//MAKE YELLOW BOXES APPEAR ONMOSEOVER EVENT (SOCIAL MEDIA BUTTONS)
$(document).ready(function () {
    $('a[title]').qtip();
});
