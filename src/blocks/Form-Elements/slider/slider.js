$( ".polzunok" ).slider({
  min:0,
  max:15000,
  range: true,
  step: 50,
  values: [5000,10000]
});
var values = $( ".polzunok" ).slider( "values" );
var dividLow = values[0].toLocaleString("ru-RU",{useGrouping:true})
var dividHigh = values[1].toLocaleString("ru-RU",{useGrouping:true})
$('.range-slider-container>.range').text(dividLow +'₽'+' - '+dividHigh + '₽')
$( ".polzunok" ).on( "slide", function( event, ui ) { 
  var values = $( ".polzunok" ).slider( "values" );
  var dividLow = values[0].toLocaleString("ru-RU",{useGrouping:true})
  var dividHigh = values[1].toLocaleString("ru-RU",{useGrouping:true})
  $('.range-slider-container>.range').text(dividLow +'₽'+' - '+dividHigh + '₽')
});
$( ".polzunok" ).on( "slidechange", function( event, ui ) {
  var values = $( ".polzunok" ).slider( "values" );
  var dividLow = values[0].toLocaleString("ru-RU",{useGrouping:true})
  var dividHigh = values[1].toLocaleString("ru-RU",{useGrouping:true})
  $('.range-slider-container>.range').text(dividLow +'₽'+' - '+dividHigh + '₽')
});