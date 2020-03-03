/*Word Game for Module 2 Assessment 
Bob Klemm 3/2/2020 */

// moving parts (words/images) in the page
const image = document.querySelector('#composerImage');
const message = document.querySelector('#message');
const wins = document.querySelector('#winTotal');
const wordblanks = document.querySelector('#wordBlanks');
const guesses = document.querySelector('#guessRemain');
const letters = document.querySelector('#guessedLetters');
const startmessage = document.querySelector('#startmessage');
const music = document.querySelector('#nowplaying');


// initial definitions of moving parts
startmessage.innerText = 'Press any key to get started!';
image.src = "assets/images/sheetmusic.jpg";
message.innerText = 'Guess a letter.';
wins.innerText = 0;
guesses.innerText =  15;
wordblanks.innerText = '';
letters.innerText = '';
music.innerText = '(In the Style of Classical Music!)';


var word = 'BACH' //composer to guess, will be random from a list later


let a = 0; //setup of letter blanks
var gaps = '';
while (a < word.length) {
    gaps = gaps.concat(" _")
    a++
}
wordblanks.innerText = gaps;

const letterg = function(event) {
    var x = event.key;
    message.innerText = 'You guessed ' + x;
}

//Event Listener for pressing letter
document.addEventListener('keypress', letterg);

const letterguess = function(event) {
    //guess of a letter
    
    var b = 0;//index of letter in the word
    var c = 0; //number of times the letter appears
    if (letters.indexOf(guess) != -1) {
        letters.concat(" ",guess);
    }
    while (i < word.length) {
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
    guesses.innerText(guesses)
    letters.innerText(letters)
}
