$( document ).ready(function() {
  // var $bedrooms = $('.bedrooms').children('.dropdown-room__count').text();
  $('.plus-button').on('click',function(){
    var count = $(this).siblings('.dropdown-room__count').text();
    ++count;
    $(this).siblings('.minus-button').addClass('minus-button--fill')
    $(this).siblings('.dropdown-room__count').text(count);
    var $baths = $('.baths').children('.dropdown-room__count').text();
    var $beds = $('.beds').children('.dropdown-room__count').text();
    var $bedrooms = $('.bedrooms').children('.dropdown-room__count').text();
    $('.dropdown-room__text-field-default').val($bedrooms + ' cпальни, ' + $beds + ' кровати...')
  });
  $('.minus-button').on('click',function(){
    var count = $(this).siblings('.dropdown-room__count').text();
    --count;
    if (count<=0)
      {count = 0;
      $(this).removeClass('minus-button--fill');
      $(this).siblings('.dropdown-room__count').text(count);}
    else
      $(this).siblings('.dropdown-room__count').text(count);
    var $beds = $('.beds').children('.dropdown-room__count').text();
    var $bedrooms = $('.bedrooms').children('.dropdown-room__count').text();
    $('.dropdown-room__text-field-default').val($bedrooms + ' cпальни, ' + $beds + ' кровати...')
  });
  $('.dropdown-room__arrow').on('click', function(){
    $('.dropdown-room__dropdown-body').toggle();
  });
  $('.dropdown-room__arrow').on('click', function(){
    $('.dropdown-room__text-field-default').toggleClass('dropdown-room__text-field-default--active');
  });
});
