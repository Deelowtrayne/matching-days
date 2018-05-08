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
  matchingDays.day1(dayOneElem.value);

  displayElem.innerHTML = DAY_TEMPLATE({
    weekdays:matchingDays.context()
  });
});

dayTwoElem.addEventListener('change', function() {
  matchingDays.day2(dayTwoElem.value);

  displayElem.innerHTML = DAY_TEMPLATE({
    weekdays:matchingDays.context()
  });
});

window.addEventListener('DOMContentLoaded', function() {
  displayElem.innerHTML = DAY_TEMPLATE({
    weekdays: matchingDays.context()
  });
});
