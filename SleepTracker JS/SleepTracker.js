const getSleepHours = day => {


    //determine num of hours slept each night
    switch (day){
        case 'Monday' :
            return  8;
            break;
        case 'Tuesday' :
            return  4;
            break;
        case 'Wednesday' :
            return 8;
            break;
        case 'Thursday' :
            return  7;
            break;
        case 'Friday' :
            return  10;
            break;
        case 'Saturday' :
            return  8;
            break;
        case 'Sunday' :
            return  9;
            break;
    }
}
//test switch statement
//console.log(getSleepHours('Sunday'));

//function to get total hours slept..implicit return
const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday') ;

//get ideal sleep hours
const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;

};

//rest total sleep  and ideal hours
console.log('Actual Sleep Hours : '  + getActualSleepHours());
console.log ('Ideal Sleep Hours : ' +getIdealSleepHours());

//calculate sleep debt
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    //give the user info
    if (actualSleepHours === idealSleepHours)
    {
        console.log('Sleep Tracker : You got the perfect amount of sleep!');
    }
    else if (actualSleepHours > idealSleepHours)
    {
        console.log('Sleep Tracker : You splept '+ (actualSleepHours -idealSleepHours)  + ' hours more than needed!');
    }
    else
    {
        console.log('Sleep Tracker : Get some more rest! You need '+ (idealSleepHours-actualSleepHours)  + ' hours of sleep!');
    }

};

//call the function
calculateSleepDebt();