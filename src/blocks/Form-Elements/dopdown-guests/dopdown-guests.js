$( document ).ready(function() {
  var guests = 0;
  $('.plus-button').on('click',function(){
    var count = $(this).siblings('.dopdown-guests__count').text();
    ++count;
    $(this).siblings('.dopdown-guests__count').text(count);
    ++guests
    $('.dopdown-guests__reset').show()
    if (guests==1||guests==21) 
      $('.dopdown-guests__text-field-default').val(guests + ' гость');
    else  if (guests==2||guests==3||guests==4||guests==22||guests==23||guests==24)
            $('.dopdown-guests__text-field-default').val(guests + ' гостя');
          else
            $('.dopdown-guests__text-field-default').val(guests + ' гостей');
  });
  $('.minus-button').on('click',function(){
    var count = $(this).siblings('.dopdown-guests__count').text();
    --count;
    if (count<0)
      count = 0;
    else
    --guests;
    $(this).siblings('.dopdown-guests__count').text(count);
    if (guests == 0)
      $('.dopdown-guests__reset').hide();
    if (guests==1||guests==21) 
      $('.dopdown-guests__text-field-default').val(guests + ' гость');
    else  if (guests==2||guests==3||guests==4||guests==22||guests==23||guests==24)
            $('.dopdown-guests__text-field-default').val(guests + ' гостя');
          else
            $('.dopdown-guests__text-field-default').val(guests + ' гостей');
  });
  $('.dopdown-guests').on('reset',function(){
    count = 0;
    guests = 0;
    $('.dopdown-guests__count').text(count);
    $('.dopdown-guests__reset').hide();
  });
  $('.dopdown-guests__arrow').on('click', function(){
    $('.dopdown-guests__dropdown-body').toggle();
  });
  $('.dopdown-guests__arrow').on('click', function(){
    $('.dopdown-guests__text-field-default').toggleClass('dopdown-guests__text-field-default--active');
  });
});