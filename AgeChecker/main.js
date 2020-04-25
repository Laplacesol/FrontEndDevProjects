let raceNumber = Math.floor(Math.random() * 1000);

var regEarly = 'true';

let runnerAge = '18';

//flow control to determine runners age and start time


if (runnerAge >18 & regEarly == 'true')
{
    raceNumber += 1000;
    console.log(`The race begins as 9:30 am, Runner ${raceNumber}.`);
}
else if (runnerAge >18 & regEarly !== 'true'){
    console.log(`The race begins at 11am, Runner ${raceNumber}`);
}
else if (runnerAge < 18)
{
    console.log(`The race begins at 12:30pm, Runner ${raceNumber}.`);
}
else (runnerAge = 18)
{
    console.log('See the registration desk.');
}
