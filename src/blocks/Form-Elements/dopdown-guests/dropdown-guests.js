$( document ).ready(function() {
  $('.dropdown-guests__plus-button').on('click',function(){
    $(this).siblings('.minus-button').addClass('minus-button--fill')
    var count = $(this).siblings('.dropdown-guests__count').text();
    ++count;
    $(this).siblings('.dropdown-guests__count').text(count);
    // var $adults=+$(this).parents('.dropdown-guests__dropdown-body').find('[data-adults]').text()
    // var $children=+$(this).parents('.dropdown-guests__dropdown-body').find('[data-children]').text()
    // var $child = +$(this).parents('.dropdown-guests__dropdown-body').find('[data-child]').text()
    // var guests = $adults + $children + $child;
    $(this).parents('.dropdown-guests__dropdown-body').find('.dropdown-guests__reset').show()
    // if (guests==1||guests==21) 
    //   $(this).parents('.dropdown-guests').find('.dropdown-guests__text-field-default').val(guests + ' гость');
    // else  if (guests==2||guests==3||guests==4||guests==22||guests==23||guests==24)
    //   $(this).parents('.dropdown-guests').find('.dropdown-guests__text-field-default').val(guests + ' гостя');
    //       else
    //         $(this).parents('.dropdown-guests').find('.dropdown-guests__text-field-default').val(guests + ' гостей');
  });
  $('.dropdown-guests__minus-button').on('click',function(){
    var count = +$(this).siblings('.dropdown-guests__count').text();
    --count;
    if (count<0)
      count = 0;
    $(this).siblings('.dropdown-guests__count').text(count);
    // var $adults=+$(this).parents('.dropdown-guests__dropdown-body').find('[data-adults]').text()
    // var $children=+$(this).parents('.dropdown-guests__dropdown-body').find('[data-children]').text()
    // var $child = +$(this).parents('.dropdown-guests__dropdown-body').find('[data-child]').text()
    // var guests = $adults + $children + $child;
    // if (guests<0)
    //   guests = 0
    if (count == 0)
      $(this).removeClass('minus-button--fill');
    // if (guests == 0)
    //   $(this).parents('.dropdown-guests__dropdown-body').find('.dropdown-guests__reset').hide();
    // if (guests==1||guests==21) 
    //   $(this).parents('.dropdown-guests').find('.dropdown-guests__text-field-default').val(guests + ' гость');
    // else  if (guests==2||guests==3||guests==4||guests==22||guests==23||guests==24)
    //   $(this).parents('.dropdown-guests').find('.dropdown-guests__text-field-default').val(guests + ' гостя');
    //       else
    //         $(this).parents('.dropdown-guests').find('.dropdown-guests__text-field-default').val(guests + ' гостей');
  });
  $('.dropdown-guests__submit').on('click', function() {
    var $adults=+$(this).parents('.dropdown-guests__dropdown-body').find('[data-adults]').text()
    var $children=+$(this).parents('.dropdown-guests__dropdown-body').find('[data-children]').text()
    var $child = +$(this).parents('.dropdown-guests__dropdown-body').find('[data-child]').text()
    var guests = $adults + $children + $child;
    // $(this).parents('.dropdown-guests__dropdown-body').find('.dropdown-guests__reset').show()
    if (guests==1||guests==21) 
      $(this).parents('.dropdown-guests').find('.dropdown-guests__text-field-default').val(guests + ' гость');
    else  if (guests==2||guests==3||guests==4||guests==22||guests==23||guests==24)
      $(this).parents('.dropdown-guests').find('.dropdown-guests__text-field-default').val(guests + ' гостя');
          else
            $(this).parents('.dropdown-guests').find('.dropdown-guests__text-field-default').val(guests + ' гостей');
  })
  $('.dropdown-guests').on('reset',function(){
    count = 0;
    guests = 0;
    $(this).find('.dropdown-guests__count').text(count);
    $(this).find('.dropdown-guests__reset').hide();
    $(this).find('.minus-button--fill').removeClass('minus-button--fill')
  });
  $('.dropdown-guests__arrow').on('click', function(){
    $(this).parent().next().toggle();
    $(this).next().toggleClass('dropdown-guests__text-field-default--active');
  });
});