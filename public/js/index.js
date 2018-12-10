$(document).ready(function() {
  $(".team-image").mouseenter(function() {
    $(this).find('.overlay').show();
  });

  $(".team-image").mouseleave(function() {
    $(this).find('.overlay').hide();
  });
});