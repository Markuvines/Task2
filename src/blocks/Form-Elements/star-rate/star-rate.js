$('.star-rate__item').on('click',function(){
  $(this).parent().children().removeClass('star-rate__item--active')
  $(this).addClass('star-rate__item--active')
  $(this).prevAll().addClass('star-rate__item--active')
})