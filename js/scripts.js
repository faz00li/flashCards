$(document).ready(function(){

  $(".cardFunction").click(function(){
    $(".function-title").toggle();
    $(".function-text").toggle();
  });

  $(".cardMethod").click(function(){
    $(".method-title").toggle();
    $(".method-text").toggle();
  });

  $(".cardVariable").click(function(){
    $(".variable-title").toggle();
    $(".variable-text").toggle();
  });

  $(".cardJS").click(function(){
    $(".js-title").toggle();
    $(".js-text").toggle();
  });

});


// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $(".walrus-showing").toggle();
//     $(".walrus-hidden").toggle();
//   });
// });
