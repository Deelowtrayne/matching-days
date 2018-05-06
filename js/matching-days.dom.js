// DATE INPUT ELEMENTS
var dayOneElem = document.querySelector('.date-1')
var dayTwoElem = document.querySelector('.date-2')
// TEMPLATE HOUSEKEEPING 
let templateSource = document.querySelector('.weekday-template').innerHTML;
const DAY_TEMPLATE = Handlebars.compile(templateSource);
const displayElem = document.querySelector('.weekday-display');

// Instance of Factory Function
var matchingDays = MatchingDays();

/*************************************************************
 *  ADD EVENT LISTENERS
 *************************************************************/
dayOneElem.addEventListener('change', function() {
  var firstDate = matchingDays.day1(dayOneElem.value);
  var secondDate = matchingDays.day2();
  
  displayElem.innerHTML = DAY_TEMPLATE({weekdays:matchingDays.context(firstDate, secondDate)});
});

dayTwoElem.addEventListener('change', function() {
  var firstDate = matchingDays.day1(/*dayOneElem.value*/);
  var secondDate = matchingDays.day2(dayTwoElem.value);
  
  displayElem.innerHTML = DAY_TEMPLATE({weekdays:matchingDays.context(firstDate, secondDate)});
});

window.addEventListener('load', function() {
  var context = {}

  for (let i = 0; i < matchingDays.weekdays.length; i++) {
    let current = matchingDays.weekdays[i];

    context[current] = {
      dayId: current,
      dayName: current
      // first:   // true or false,
      // second:  // true or false,
      // sameDay: // true or false
    }
  }
  displayElem.innerHTML = DAY_TEMPLATE({weekdays: context});
});
