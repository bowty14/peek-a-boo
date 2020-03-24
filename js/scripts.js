$(document).ready(function() {
  $(".clickable").click(function() {
    $("#puppy-showing").fadeToggle(); 
    $("#puppy-hidden").fadeToggle();
    $(".ready-trailer").fadeIn();
    $(".cureTrailer").fadeIn();
  });
});