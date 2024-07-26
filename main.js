//Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// hours = 60 min 
// min = 60 sec
// hours = 60 * 60 = 3600 sec

function convertToSec(hours, min) {
    let sec = (hours * 3600) + (min * 60);
    hours = 3600;
    min = 60;

    return sec;
}
console.log(convertToSec(1, 3));
console.log(convertToSec(2, 0));
console.log(convertToSec(0, 0));