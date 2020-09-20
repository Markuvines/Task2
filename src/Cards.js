import Calendar from "./blocks/Form-Elements/calendar/calendar";

let calendar = new Calendar($('.colomn3 .calendar'));
calendar.render();
$('.colomn3 .calendar .calendar__next').on('click',function(){
  calendar.next()
})
$('.colomn3 .calendar .calendar__prev').on('click',function(){
  calendar.prev()
})
$('.colomn3 .calendar .calendar__days').on('click','div',function () {
  calendar.range($(this));
});
$('.colomn3 .calendar .calendar__reset').on('click',function () {
  calendar.reset();
});
$('.date-range__dates .date__dropdown-arrow').on('click', function(){
  $(this).parents('.date-range__dates').siblings('.date-range__calendar').toggle()
});

import './blocks/Form-Elements/dopdown-guests/dropdown-guests';
import './blocks/Form-Elements/toggle/toggle';
import './blocks/Cards/room-card-lux/room-card-lux';
import './blocks/Cards/room-card/room-card';
import './blocks/Cards/room-selection/room-selection'
import './blocks/Cards/reservation/reservation'