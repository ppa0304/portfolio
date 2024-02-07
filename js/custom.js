(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $(window).scroll(function() {
    var hT = $('#skill-bar-wrapper').offset().top,
        hH = $('#skill-bar-wrapper').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-1.4*wH)){
        jQuery(document).ready(function(){
            jQuery('.skillbar-container').each(function(){
                jQuery(this).find('.skills').animate({
                    width:jQuery(this).attr('data-percent')
                }, 5000); // 5 seconds
            });
        });
    }
 });
    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

$("a b").html(function(index, html) {
  return html.replace(/\S/g, '<span>$&</span>');
});

$("a").click(function(){
        $("a").addClass("loading");     
        setTimeout(function(){
          $("a").removeClass("loading"); 
        }, 8000);

});