// var $active=false;
var $count
$('.like-button').on('click',function(){
  $count = $(this).children('.like-button__count').text()
  if ($(this).attr('data-status') == 'active') {
    $(this).toggleClass('like-button--active');
    $(this).children('.like-button__like').children('img').attr('src', './src/img/favorite_border.svg')
    $count--
    $(this).children('.like-button__count').text($count)
    $(this).attr('data-status', 'disabled')
  }
  else {
    $(this).toggleClass('like-button--active');
    $(this).children('.like-button__like').children('img').attr('src', './src/img/favorite.svg')
    $count++
    $(this).children('.like-button__count').text($count)
    $(this).attr('data-status', 'active')
  }
  if ($count>=10) 
    $(this).children('.like-button__count').addClass('like-button__count--big-number')
  else
    $(this).children('.like-button__count').removeClass('like-button__count--big-number')
})