const name = prompt('What is your name: ');
if (name.length > 4) {
    alert('Your name is greater than 4 characters!')
} else if (name.length === 4) {
    alert('Your name is exactly 4 characters!')
} else {
    alert('Your name is less than 4 characters!')
}
