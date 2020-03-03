/*Word Game for Module 2 Assessment 
Bob Klemm 3/2/2020 */

// moving parts (words/images) in the page
var image = document.querySelector('#composerImage');
var message = document.querySelector('#message');
var wins = document.querySelector('#winTotal');
var wordblanks = document.querySelector('#wordBlanks');
var guesses = document.querySelector('#guessRemain');
var letters = document.querySelector('#guessedLetters');
var startmessage = document.querySelector('#startmessage');

// initial definitions of moving parts
startmessage.innerText = 'Press any key to get started!';
image.src = "assets/images/sheetmusic.jpg";
message.innerText = 'Welcome!';
wins.innerText = 0;
guesses.innerText =  15;
wordblanks.innerText = '';
letters.innerText = '';


var word = 'BACH' //composer to guess
//initialize game
document.addEventListener('keypress', function(){wordgame(word)})

function wordgame(word) {
    startmessage.innerText = 'Game in progress.'
    message.innerText = 'Guess a letter.'
    
    let a = 0; //setup of letter blanks
    var gaps = '';
    while (a < word.length) {
        gaps = gaps.concat(" _")
        a++
    }
    wordblanks.innerText = gaps;
    
    //guess of a letter
    var x = onkeypress.which();
    var guess = String.fromCharCode(x); 
    message.innerText = 'Ok guess';
    var b = 0;//index of letter in the word
    var c = 0; //number of times the letter appears
    if (letters.indexOf(guess) != -1) {
        letters.concat(" ",guess);
    }
    while (i < word.length) {
        message.innerText = 'Good guess.';
        b0 = word.indexOf(guess,b);
        b = b0
        if (b != -1 && c === 0) {
            gaps(2*b+1) = guess;
            guesses--
            c++
        } else if (b != -1 && c > 0){
            gaps(2*b+1) = guess;
            c++
        } else {
            guesses--
        }
        i++   
    }
}

