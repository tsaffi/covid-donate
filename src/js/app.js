/* Template Name: Cristino - Responsive Personal Template
   Author: Shreethemes
   Email: shreethemes@gmail.com
   Website: http://www.shreethemes.in/
   Version: v1.3
   Updated: 15th January, 2020
   Created: August 2019
   File Description: Main JS file of the template
*/

/************************/
/*       INDEX          */
/*=======================
 *  01.  Menu           *
 *  02.  Scrollspy      *
 *  03.  Loader         *
 *  04.  Back to top    *
 =======================*/

! function($) {
    "use strict";
    //*********************/ 
    //         Menu       */
    //*********************/ 
    // Menu
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (window.location.pathname.split("/")[1] === "contact" || window.location.pathname.split("/")[1] === "hospitals"){
            $(".sticky").addClass("nav-sticky");
        }else{
            if (scroll >= 20) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        }
    });

    $('.navbar-nav a, .mouse-down').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    //*********************/ 
    //      Scrollspy     */
    //*********************/ 
    $(".navbar-nav").scrollspy({ offset: 70 });


    //*********************/ 
    //       Loader       */
    //*********************/ 
    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
        let date = new Date();
        $('.age').text(date.getFullYear() - 1997);
    });


    //*********************/ 
    //    BACK TO TOP     */
    //*********************/ 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    }); 

    $(".back-to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
    });

    $('.download-cv').click(function(e){
        e.preventDefault();
        window.location.href="../layouts/resume/MyResume.pdf";
    });

}(jQuery)