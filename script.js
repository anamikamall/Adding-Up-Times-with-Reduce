const timeNodes = Array.from(document.querySelectorAll('[data-time'));

const seconds = timeNodes
.map(node => node.dataset.time)
.map(timeCode => {
    const [min, sec] = timeCode.split(':').map(parseFloat);
    return (min * 60) + sec;
    console.log(min, sec);
})
.reduce((total, vidSec) => total + vidSec);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft/3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
 
console.log(hours, mins, secondsLeft);

document.querySelector('.total').innerText = `${hours} hours ${mins} minutes ${secondsLeft} seconds`;