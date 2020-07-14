$('.checkbox-list__arroy').on('click', function(){
  $(this).parent('.checkbox-list__field').siblings('.checkbox-list__body').slideToggle()
  $(this).toggleClass('checkbox-list__arroy--rotate');
})