    $(document).ready(function(){
      $('.imgs').slick({
        string: 'ondemand',
        adaptiveHeight: true
      });

      var body = $('body');

      $('.btn-toggle-nav').on('click', function() {
        body.toggleClass('active-nav');
      });

      $('.nav a').on('click', function() {
        body.removeClass('active-nav');
      });
    });

