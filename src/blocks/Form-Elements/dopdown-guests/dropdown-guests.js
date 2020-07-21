$( document ).ready(function() {
  var guests = 0;
  $('.dropdown-guests__plus-button').on('click',function(){
    var count = $(this).siblings('.dropdown-guests__count').text();
    ++count;
    $(this).siblings('.dropdown-guests__count').text(count);
    ++guests
    $('.dropdown-guests__reset').show()
    if (guests==1||guests==21) 
      $('.dropdown-guests__text-field-default').val(guests + ' гость');
    else  if (guests==2||guests==3||guests==4||guests==22||guests==23||guests==24)
            $('.dropdown-guests__text-field-default').val(guests + ' гостя');
          else
            $('.dropdown-guests__text-field-default').val(guests + ' гостей');
  });
  $('.dropdown-guests__minus-button').on('click',function(){
    var count = $(this).siblings('.dropdown-guests__count').text();
    --count;
    if (count<0)
      count = 0;
    else
    --guests;
    $(this).siblings('.dropdown-guests__count').text(count);
    if (guests == 0)
      $('.dropdown-guests__reset').hide();
    if (guests==1||guests==21) 
      $('.dropdown-guests__text-field-default').val(guests + ' гость');
    else  if (guests==2||guests==3||guests==4||guests==22||guests==23||guests==24)
            $('.dropdown-guests__text-field-default').val(guests + ' гостя');
          else
            $('.dropdown-guests__text-field-default').val(guests + ' гостей');
  });
  $('.dropdown-guests').on('reset',function(){
    count = 0;
    guests = 0;
    $('.dropdown-guests__count').text(count);
    $('.dropdown-guests__reset').hide();
  });
  $('.dropdown-guests__arrow').on('click', function(){
    $('.dropdown-guests__dropdown-body').toggle();
  });
  $('.dropdown-guests__arrow').on('click', function(){
    $('.dropdown-guests__text-field-default').toggleClass('dropdown-guests__text-field-default--active');
  });
});