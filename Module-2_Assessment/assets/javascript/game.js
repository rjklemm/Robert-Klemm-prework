/*Word Game for Module 2 Assessment 
Bob Klemm 3/2/2020 */

var winTotal = 0;
var guessCount = 12;
var pastletters = ' ';

// moving parts (words/images) in the page
var image = document.querySelector('#composerImage');
var message = document.querySelector('#message');
var wins = document.querySelector('#winTotal');
var wordblanks = document.querySelector('#wordBlanks');
var guesses = document.querySelector('#guessRemain');
var letters = document.querySelector('#guessedLetters');
var startmessage = document.querySelector('#startmessage');
var music = document.querySelector('#nowplaying');


// initial definitions of moving parts
startmessage.innerText = 'Press any key to get started!';
image.src = "assets/images/sheetmusic.jpg";
message.innerText = 'Guess a letter.';
wins.innerText = winTotal;
guesses.innerText =  guessCount;
wordblanks.innerText = '';
letters.innerText = '';
music.innerText = '(In the Style of Classical Music!)';

var correctletters = 0;
//var i = 0;

//all composers (last name, picturefile, soundfile, piece)
var composers = [
    ['BACH', "assets/images/bach.jpg","assets/sounds/Bach-minuet-in-g.mp3" , "Bach: Minuet in G"],
    ['BEETHOVEN', "assets/images/beethoven.jpg", "assets/sounds/Moonlight-sonata-piano.mp3", "Beethoven: Moonlight Sonata"],
    ['BRAHMS', "assets/images/brahms.jpg", "assets/sounds/Hungarian-dance-no-5-piano.mp3", "Brahms: Hungarian Dance No. 5"],
    ['CHOPIN', "assets/images/chopin.jpg", "assets/sounds/Chopin-nocturne-op-9-no-2.mp3", "Chopin: Nocturne Op. 9 No. 2"],
    ['DEBUSSY', "assets/images/debussy.jpg", "assets/sounds/Clair-de-lune-piano.mp3", "Debussy: Clair de Lune"],
    ['DVORAK', "assets/images/dvorak.jpg", "assets/sounds/Humoresque-dvorak.mp3", "Dvorak: Humoresque"  ],
    ['ELGAR', "assets/images/elgar.jpg", "assets/sounds/Salut-d-amour.mp3", "Elgar: Salut d'amour"],
    ['GRIEG', "assets/images/grieg.jpg", "assets/sounds/Edvard-grieg-morning-mood.mp3", "Grieg: Morning Mood" ],
    ['MOZART', "assets/images/mozart.jpg", "assets/sounds/Eine-Kleine-Nachtmusik.mp3", "Mozart: Eine Kleine Nachtmusik"],
    ['SCHUBERT', "assets/images/schubert.jpg", "assets/sounds/Schubert-ave-maria.mp3", "Schubert: Ave Maria"],
    ['SCHUMANN', "assets/images/schumann.jpg", "assets/sounds/Traumerei-piano-music.mp3", "Schumann: Traumerei"],
    ['TCHAIKOVSKY', "assets/images/tchaikovsky.jpg", "assets/sounds/Waltz-of-the-flowers.mp3", "Tchaikovsky: Waltz of the Flowers"]
];


//pick random composer
var z = Math.floor(Math.random() * 5); //random number from 0 to 4
if (z === 5) {
    z--
}

word = composers[z][0];


let a = 0; //setup of letter blanks
var gaps = '';
while (a < word.length) {
    gaps = gaps.concat("_ ")
    a++
}
wordblanks.innerText = gaps;



const letterguess = function(event) {
    //guess of a letter
    var guess = event.key;
    guess = guess.toUpperCase();

    //to remove non-letter keys
    var code = guess.charCodeAt(0);

    message.innerText = 'Guess a letter.' //for new game after win/loss message

    // If letter hasn't been guessed before
    if (pastletters.search(guess) === -1 && code > 64 && code < 91) {

        //add letter to guessed letters
        pastletters = pastletters.concat(guess);
        document.querySelector('#guessedLetters').innerText = pastletters;

        //decrease guesses by 1
        guessCount = guessCount - 1; 
        document.querySelector('#guessRemain').innerText = guessCount;

        // If letter is in hidden word
        if (word.indexOf(guess) != -1) {
            let i = 0;
            while (i < word.length) {
                //replace blank with letter
                if (word.charAt(i) === guess) {
                    //converts string to array and back to replace blank with letter
                    var gapsarray = gaps.split(" ");
                    gapsarray[i] = guess;
                    gaps = gapsarray.toString();
                    gaps = gaps.replace(/,/g,' '); //remove commas from string
                    correctletters++
                }
                i++
            }
            document.querySelector('#wordBlanks').innerText = gaps;
        }

        //run out of guesses
        if (guessCount < 1 && correctletters < word.length) {
            message.innerText = 'Out of guesses. Try again. The answer was ' + word;
            guessCount = 12;
            pastletters = ' ';
            correctletters = 0;

            
            guesses.innerText =  guessCount;
            letters.innerText = pastletters;

            //pick random composer
            z = Math.floor(Math.random() * 12); //random number from 0 to 4
            if (z === 12) {
                z--
            }

            word = composers[z][0];


            a = 0; //setup of letter blanks
            gaps = '';
            while (a < word.length) {
                gaps = gaps.concat("_ ")
                a++
            }
            wordblanks.innerText = gaps;
            

        }

        //word solved 
        if (correctletters === word.length) {
            message.innerText = 'You win! Another word is ready.'
            image.src = composers[z][1];
            winTotal++ //increase win count
            wins.innerText = winTotal;
            correctletters = 0;
            guessCount = 12;
            pastletters = ' ';

            
            guesses.innerText =  guessCount;
            letters.innerText = pastletters;

            document.querySelector('#piece').src = composers[z][2]; //play sound by that composer
            document.querySelector('#nowplaying').innerText = 'Now Playing: ' + composers[z][3]; //message about what's playing now

            //pick random composer
            z = Math.floor(Math.random() * 12); //random number from 0 to 4
            if (z === 12) {
                z--
            }

            word = composers[z][0];

            a = 0; //setup of letter blanks
            gaps = '';
            while (a < word.length) {
                gaps = gaps.concat("_ ")
                a++
            }
            wordblanks.innerText = gaps;
            

        }
    }
}


//Event Listener for pressing letter (must be last in document?)
document.addEventListener('keypress', letterguess);