describe('Tests for the Matching Days app', function(){
    // Day 1
    describe ('Tests the Day One function', function(){
        it ('Should return (\'\') if no date is passed', function(){
            let matching = MatchingDays();
            assert.equal(matching.day1(), '');
        });
    
        it ('Should return the weekday of the passed date (Monday)', function(){
            let matching = MatchingDays();
            assert.equal(matching.day1('2018-05-07'), 'Monday');
        });
    
        it ('Should return (false) if the weekday of the passed date is not the expected', function(){
            let matching = MatchingDays();
            assert.equal(matching.day1('2018-05-07'), 'Monday');
        });
    });
    // Day 2
    describe ('Tests the Day Two function', function(){
        it ('Should return (\'\') if no date is passed', function(){
            let matching = MatchingDays();
            assert.equal(matching.day2(), '');
        });
    
        it ('Should return the weekday of the passed date (Tuesday)', function(){
            let matching = MatchingDays();
            assert.equal(matching.day2('2018-05-08'), 'Tuesday');
        });
    
        it ('Should return (false) if the weekday of the passed date is not the expected', function(){
            let matching = MatchingDays();
            assert.notEqual(matching.day2('2018-05-08'), 'Wednesday');
        });
    });
    // Same weekday
    describe ('Tests the Same Weekday function', function(){
        it ('Should return (true) the date1 and date2 fall on the same day', function(){
            let matching = MatchingDays();
            matching.day1('2018-05-07');
            matching.day2('2018-05-07');
            assert.equal(matching.match(), true);
        });
        it ('Should return (true) the date1 and date2 fall on the same weekday', function(){
            let matching = MatchingDays();
            matching.day1('2018-05-07');
            matching.day2('2018-05-14');
            assert.equal(matching.match(), true);
        });
        it ('Should return (false) the date1 and date2 do not fall on the same weekday', function(){
            let matching = MatchingDays();
            matching.day1('2018-05-07');
            matching.day2('2018-05-15');
            assert.notEqual(matching.match(), true);
        });
    });
    // Context
    describe('Tests the Create Context function', function(){
        
        it('should return default context (Object) if no dates are passed', function(){
            
            let matching = MatchingDays();
            assert.deepEqual(
                matching.context(), 
                {
                    Sunday: {dayName: 'Sunday'}, 
                    Monday: {dayName: 'Monday'}, 
                    Tuesday: {dayName: 'Tuesday'}, 
                    Wednesday: {dayName: 'Wednesday'}, 
                    Thursday: {dayName: 'Thursday'}, 
                    Friday: {dayName: 'Friday'}, 
                    Saturday: {dayName: 'Saturday'}
                }
            );
        });
        
        it('should return context (Object) with (isSameDay) property to true set for Wednesday', function(){
            
            let matching = MatchingDays();
            matching.day1('2018-05-07');
            matching.day2('2018-05-14');
            assert.deepEqual(
                matching.context(), 
                {
                    Sunday: {dayName: 'Sunday'}, 
                    Monday: {dayName: 'Monday', isSameDay: true}, 
                    Tuesday: {dayName: 'Tuesday'}, 
                    Wednesday: {dayName: 'Wednesday'}, 
                    Thursday: {dayName: 'Thursday'}, 
                    Friday: {dayName: 'Friday'}, 
                    Saturday: {dayName: 'Saturday'}
                }
            );
        });
        
        it('should return context (Object) with (isDayOne) property to true set for Monday', function(){
            
            let matching = MatchingDays();
            matching.day1('2018-05-07');

            assert.deepEqual(
                matching.context(), 
                {
                    Sunday: {dayName: 'Sunday'}, 
                    Monday: {dayName: 'Monday', isDayOne: true}, 
                    Tuesday: {dayName: 'Tuesday'}, 
                    Wednesday: {dayName: 'Wednesday'}, 
                    Thursday: {dayName: 'Thursday'}, 
                    Friday: {dayName: 'Friday'}, 
                    Saturday: {dayName: 'Saturday'}
                }
            );
        });
        
        it('should return context (Object) with (isDayTwo) property to true set for Wednesday', function(){
            
            let matching = MatchingDays();
            matching.day2('2018-05-23');

            assert.deepEqual(
                matching.context(), 
                {
                    Sunday: {dayName: 'Sunday'}, 
                    Monday: {dayName: 'Monday'}, 
                    Tuesday: {dayName: 'Tuesday'}, 
                    Wednesday: {dayName: 'Wednesday', isDayTwo: true}, 
                    Thursday: {dayName: 'Thursday'}, 
                    Friday: {dayName: 'Friday'}, 
                    Saturday: {dayName: 'Saturday'}
                }
            );
        });
    });
})