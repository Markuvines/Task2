import Calendar from "../../Form-Elements/calendar/calendar";
let roomSelection = new Calendar($('.room-selection'));
roomSelection.render();
$('.room-selection .calendar__next').on('click',function(){
  roomSelection.next()
})
$('.room-selection .calendar__prev').on('click',function(){
  roomSelection.prev()
})
$('.room-selection .calendar__days').on('click','div',function () {
  roomSelection.range($(this));
})
$('.room-selection .calendar__apply').on('click',function(){
  let arr = roomSelection.getDateArr();
  $('.room-selection .date-range__arrival input').val(arr[0]);
  $('.room-selection .date-range__departure input').val(arr[1]);
})
$('.room-selection .calendar__reset').on('click',function(){
  roomSelection.reset()
  $('.room-selection .date-range__arrival input').val('');
  $('.room-selection .date-range__departure input').val('');
})