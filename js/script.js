$(document).ready(function () {
  /*$(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });*/

  $(function () {
    $('#services').hover(function () {
      $(this).find('ul').first().stop().slideDown(200);
    }, function () {
      $(this).find('ul').stop().slideUp(50);
    });
  });
});

let today = new Date();
let year = today.getFullYear();
$('#year').text(year);

