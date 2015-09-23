jQuery(document).ready(function(){
        // code attribution: http://codetheory.in/change-active-state-links-sticky-navigation-scroll/
        var stickyHeaderTop = jQuery('.interior-navigation').offset().top;

        jQuery(window).scroll(function(){
                if( jQuery(window).scrollTop() > stickyHeaderTop ) {
                        jQuery('.interior-navigation').css({position: 'fixed', top: '0px', 'z-index': '100', 'box-shadow': '0px 3px 5px 0px rgba(0,0,0,0.18)'});
                        jQuery('.interior-navigation-spacer').css('display', 'block');
                } else {
                        jQuery('.interior-navigation').css({position: 'static', top: '-70px', 'box-shadow': 'none'});
                        jQuery('.interior-navigation-spacer').css('display', 'none');
                }
        });
  });

// code attribution: http://codetheory.in/change-active-state-links-sticky-navigation-scroll/
jQuery(document).ready(function(){
    var sections = jQuery('.wrapper')
      , nav = jQuery('.interior-navigation')
      , nav_height = nav.outerHeight();
     
    jQuery(window).on('scroll', function () {
      var cur_pos = jQuery(this).scrollTop();
     
      sections.each(function() {
        var top = jQuery(this).offset().top - nav_height,
            bottom = top + jQuery(this).outerHeight();
     
        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          sections.removeClass('active');
     
          jQuery(this).addClass('active');
          nav.find('a[href="#'+jQuery(this).attr('id')+'"]').addClass('active');
        }
      });
    });

    jQuery('.interior-navigation').find('a').on('click', function () {
      var jQueryel = jQuery(this)
        , id = jQueryel.attr('href');
     
      jQuery('html, body').animate({
        scrollTop: jQuery(id).offset().top
      }, 500);
     
      return false;
    });

});
