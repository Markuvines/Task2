import Calendar from "../../Form-Elements/calendar/calendar";
let reservation = new Calendar($('.reservation'));
reservation.render();
$('.reservation .calendar__next').on('click',function(){
  reservation.next()
})
$('.reservation .calendar__prev').on('click',function(){
  reservation.prev()
})
$('.reservation .calendar__days').on('click','div',function () {
  reservation.range($(this));
})
$('.reservation .calendar__apply').on('click',function(){
  let arr = reservation.getDateArr();
  $('.reservation .date-range__arrival input').val(arr[0]);
  $('.reservation .date-range__departure input').val(arr[1]);
})
$('.reservation .calendar__reset').on('click',function(){
  reservation.reset()
  $('.reservation .date-range__arrival input').val('');
  $('.reservation .date-range__departure input').val('');
})