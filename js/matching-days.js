
function MatchingDays() {

    const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date1 = '';
    var date2 = '';

    function getDay1(value) {
        if (value !== undefined) {
        date1 = value;
        }
        let date = new Date(date1);
        return WEEKDAYS[date.getDay()];
    }

    function getDay2(value) {
        if (value !== undefined){
        date2 = value;
        }
        let date = new Date(date2);
        return WEEKDAYS[date.getDay()];
    }

    function sameWeekDay() {
        if (date1 !== undefined && date2 !== undefined) {
        first = new Date(date1);
        second = new Date(date2);
        return first.getDay() == second.getDay();
        }
        return false;
    }

    function createContext(dateOne, dateTwo){

    var context = {};

    for (let i = 0; i < WEEKDAYS.length; i++) {
        let current = WEEKDAYS[i];
        context[current] = {
        dayId: current,
        dayName: current
        }
        if (current === dateOne) {
            // add style for first date
            context[current] = Object.assign({'first': 'red'}, context[current]);
            if (sameWeekDay()) {
                // add style for matching date
                delete context[current].first;
                context[current] = Object.assign({'sameDay': 'green'}, context[current]);
            }
        } else if (current === dateTwo) {
            // add style for first date
            context[current] = Object.assign({'second': 'blue'}, context[current]);
            if (sameWeekDay()) {
                // add style for matching date
                delete context[current].second;
                context[current] = Object.assign({'sameDay': 'green'}, context[current]);
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
  