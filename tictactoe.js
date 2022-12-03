const places = document.querySelectorAll('div');
const button = document.querySelector('button');
const h2 = document.querySelector('h2');
const p1 = document.querySelector('#b1');
const p2 = document.querySelector('#b2');
const p3 = document.querySelector('#b3');
const p4 = document.querySelector('#b4');
const p5 = document.querySelector('#b5');
const p6 = document.querySelector('#b6');
const p7 = document.querySelector('#b7');
const p8 = document.querySelector('#b8');
const p9 = document.querySelector('#b9');
let message = document.createElement('p');
let played = false;
let flag = false;
let turns = 0;
let count = 0;
for (let place of places) {
    place.addEventListener('click', function () {
        if (place.innerText === '') {
            if (h2.innerText === "Turn : O" && played === false) {
                place.innerText = "O";
                played = true;
                turns++;
            }
            else if (h2.innerText === "Turn : X" && played === false) {
                place.innerText = "X";
                played = true;
                turns++;
            }
            else if (played) {
                message.innerText = 'You have played your turn, click confirm to pass your turn';
                document.body.appendChild(message);
                setTimeout(() => {
                    document.body.removeChild(message);
                }, 2000);
            }
            count = 1;
            if (p1.innerText !== '' && p2.innerText !== '' && p3.innerText !== '' && p1.innerText === p2.innerText && p2.innerText == p3.innerText) {
                message.innerText = `Game Over Player ${p1.innerText} wins`;
                document.body.appendChild(message);
                flag = true;
            }
            else if (p4.innerText !== '' && p5.innerText !== '' && p6.innerText !== '' && p4.innerText === p5.innerText && p5.innerText == p6.innerText) {
                message.innerText = `Game Over Player ${p4.innerText} wins`;
                document.body.appendChild(message);
                flag = true;
            }
            else if (p7.innerText !== '' && p8.innerText !== '' && p9.innerText !== '' && p7.innerText === p8.innerText && p8.innerText == p9.innerText) {
                message.innerText = `Game Over Player ${p7.innerText} wins`;
                document.body.appendChild(message);
                flag = true;
            }
            else if (p1.innerText !== '' && p4.innerText !== '' && p7.innerText !== '' && p1.innerText === p4.innerText && p4.innerText == p7.innerText) {
                message.innerText = `Game Over Player ${p1.innerText} wins`;
                document.body.appendChild(message);
                flag = true;
            }
            else if (p2.innerText !== '' && p5.innerText !== '' && p8.innerText !== '' && p2.innerText === p5.innerText && p5.innerText == p8.innerText) {
                message.innerText = `Game Over Player ${p2.innerText} wins`;
                document.body.appendChild(message);
            }
            else if (p3.innerText !== '' && p6.innerText !== '' && p9.innerText !== '' && p3.innerText === p6.innerText && p6.innerText == p9.innerText) {
                message.innerText = `Game Over Player ${p3.innerText} wins`;
                document.body.appendChild(message);
                flag = true;
            }
            else if (p1.innerText !== '' && p5.innerText !== '' && p9.innerText !== '' && p1.innerText === p5.innerText && p5.innerText == p9.innerText) {
                message.innerText = `Game Over Player ${p1.innerText} wins`;
                document.body.appendChild(message);
                flag = true;
            }
            else if (p3.innerText !== '' && p5.innerText !== '' && p7.innerText !== '' && p3.innerText === p5.innerText && p5.innerText == p7.innerText) {
                message.innerText = `Game Over Player ${p3.innerText} wins`;
                document.body.appendChild(message);
                flag = true;
            }
            if (turns === 9) {
                message.innerText = `Game Over Tie`;
                document.body.appendChild(message);
                flag = true;
            }
            if (flag) {
                setTimeout(() => {
                    for (let place of places) {
                        place.innerText = '';
                        h2.innerText = "Turn : O";
                    }
                    flag = false;
                    turns = 0;
                    played = false;
                    document.body.removeChild(message);
                    message.innerText = 'New Game';
                    document.body.appendChild(message);
                    setTimeout(() => {
                        document.body.removeChild(message);
                    }, 2000);
                }, 2000);
            }
        }
        else {
            message.innerText = 'Choose an Empty block';
            document.body.appendChild(message);
            setTimeout(() => {
                document.body.removeChild(message);
            }, 2000);
        }
    })
}

button.addEventListener('click', function () {
    if (count === 1) {
        if (h2.innerText === "Turn : O") {
            h2.innerText = "Turn : X";
            played = false;
            count = 0;
        }
        else {
            h2.innerText = "Turn : O";
            played = false;
            count = 0;
        }
    }
    else {
        message.innerText = 'Play your turn before clicking confirm';
        document.body.appendChild(message);
        setTimeout(() => {
            document.body.removeChild(message);
        }, 2000);
    }
})