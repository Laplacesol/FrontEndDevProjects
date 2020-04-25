let userName = ''
userName === '' ? console.log('Hello!') : console.log('Hello! ${userName}!');

const userQuestion = 'Will I become a werewolf tonight?';
console.log(`The user asked: ${userQuestion}`);

//generate a random number
var randomNumber = Math.floor(Math.random() *8);

let eightBall = '';

//flow control that takes in randomNumber and assigns it to eightBall for a return

switch (randomNumber) {
    case 0:
        eightBall= 'It is certain';
        break;
    case 1:
        eightBall= 'It is certain';
        break;
    case 2:
        eightBall= 'Outlook not so good';
        break;
    case 3:
        eightBall= 'Signs point to yes';
        break;
    case 4:
        eightBall= 'Do not count on it';
        break;
    case 5:
        eightBall= 'Defer to the swamp';
        break;
    default :
        eightBall = 'Reply hazy, try again';

}

//print the response
console.log(`Magic eightball says : ${eightBall}`);