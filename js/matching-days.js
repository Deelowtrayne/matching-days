
function MatchingDays() {

    const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOne = '';
    var dayTwo = '';

    function getDay1(value) {
        if (value !== undefined) {
            let date = new Date(value);
            dayOne = WEEKDAYS[date.getDay()];
        }
        return dayOne;
    }

    function getDay2(value) {
        if (value !== undefined){
            let date = new Date(value);
            dayTwo = WEEKDAYS[date.getDay()];
        }
        return dayTwo;
    }

    function sameWeekDay() {
        return dayOne == dayTwo;
    }

    function createContext(){
        var context = {};
        
        for (let i = 0; i < WEEKDAYS.length; i++) {
            let current = WEEKDAYS[i];
            context[current] = { dayName: current }
            
            if (dayOne !== undefined && current === dayOne) {
                // add style for first date
                context[current] = Object.assign({isDayOne: true}, context[current]);
                if (sameWeekDay()) {
                    // add style for matching date
                    delete context[current].isDayOne;
                    context[current] = Object.assign({isSameDay: true}, context[current]);
                }
            } 
            else if (dayTwo !== undefined && current === dayTwo) {
                // add style for second date
                context[current] = Object.assign({isDayTwo: true}, context[current]);
                if (sameWeekDay()) {
                    // add style for matching date
                    delete context[current].isDayTwo;
                    context[current] = Object.assign({isSameDay: true}, context[current]);
                }
            }
        }
        return context;
    }

    return {
        day1: getDay1,
        day2: getDay2,
        match: sameWeekDay,
        context: createContext,
        weekdays: WEEKDAYS
    }
}
