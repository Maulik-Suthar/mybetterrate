/* -----| script |-------*

 * 01. Mobile call

 * 02. Mobile Filter

 * 03. Km. Select Dropdown

 ** 3.1 Mobile view Km select jQuery Ui destroy 

 * 04. Search Auto Suggess

 * 05. Location Search Auto Suggess

 * 06. Home Main Slider

 * 07. Category Add Banner Slider

 * 08. Masonry Category List

 * 09. Scroll back to top

 * 10. FAQ Accordions 

 */





$(document).ready(function() {  


//========================================================
    // Button Hover effect
    //========================================================
    // $('.btn').append('<span class="btnHover"></span>');
    // $('.btn')
    //         .on('mouseenter', function(e) {
    //     var parentOffset = $(this).offset(),
    //             relX = e.pageX - parentOffset.left,
    //             relY = e.pageY - parentOffset.top;
    //     $(this).find('.btnHover').css({top: relY, left: relX})
    // })
    //         .on('mouseout', function(e) {
    //     var parentOffset = $(this).offset(),
    //             relX = e.pageX - parentOffset.left,
    //             relY = e.pageY - parentOffset.top;
    //     $(this).find('.btnHover').css({top: relY, left: relX})
    // });





/* Mobile menu */  

$('.menuIcon').click(function() {

        $(this).toggleClass('menu-close');

        $('.navigationBar').toggleClass('slideMenu');

        $('body').addClass('bodyFixed');

    });


$('.sidebar-overlay, .closeMenu').click(function() {

        $('.menuIcon').removeClass('menu-close');

        $('.navigationBar').removeClass('slideMenu');

        $('body').removeClass('bodyFixed');


  });



$('.menuMain li:has(ul)').prepend('<span class="arrow"></span>'); 

$('.arrow').click(function() {  

  $(this).siblings('ul').slideToggle('slow'); 

  $(this).toggleClass('minus'); 

});

if( $( '.bloglistmain' ).length ) {
$('.bloglistmain').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    responsive: [
    {

      breakpoint: 991, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }

    }
  ]

  });
}

if( $( '.lastestblogmain' ).length ) {
$('.lastestblogmain').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [
    {

      breakpoint: 991, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }

    }
  ]

  });
}

if( $( '.relatdblogmain' ).length ) {
$('.relatdblogmain').slick({
    infinite: false,
    arrows: false,
    slidesToShow: 0,
    slidesToScroll: 0,
    dots: false,
    autoplay: false,
    responsive: [
    // {

    //   breakpoint: 991, 
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     dots: true
    //   }
    // },

    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }

    },

    {
      breakpoint: 415,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }

    }
  ]

  });
}


/* Range slider code */

$( "#new_property_slider" ).slider({
      range: "min",
      min: 30,
      max: 1000,
      value: 200,
      slide: function( event, ui ) {
        $( "#new_property_slider_total" ).text("$" +  ui.value );
      }
    });
    $( "#new_property_slider_total" ).text( $( "#new_property_slider" ).slider( "value" ) );


    $( "#down_payment_slider" ).slider({
      range: "min",
      min:3,
      max: 100,
      value:3,
      slide: function( event, ui ) {
        $( "#down_payment_slider_total" ).text(ui.value + "%");
      }
    });
    $( "#down_payment_slider_total" ).text( $( "#down_payment_slider" ).slider( "value" ) );

    $( "#household_income_slider" ).slider({
      range: "min",
      min: 30,
      max: 1000,
      value: 200,
      slide: function( event, ui ) {
        $( "#household_income_slider_total" ).text("$" +  ui.value );
      }
    });
    $( "#household_income_slider_total" ).text( $( "#household_income_slider" ).slider( "value" ) ); 


    $( "#mySlider" ).slider({
      range: "min",
      min: 30,
      max: 1000,
      value: 200,
      slide: function( event, ui ) {
        $( "#total" ).text("$" +  ui.value );
      }
    });
    $( "#total" ).text( $( "#mySlider" ).slider( "value" ) );


    $( "#mortgage_balance" ).slider({
      range: "min",
      min: 30,
      max: 1000,
      value: 200,
      slide: function( event, ui ) {
        $( "#mortgage_balance_total" ).text("$" +  ui.value );
      }
    });
    $( "#mortgage_balance_total" ).text( $( "#mortgage_balance" ).slider( "value" ) );


    $( "#mortgage_interest" ).slider({
      range: "min",
      min:3,
      max: 100,
      value:2,
      slide: function( event, ui ) {
        $( "#mortgage_interest_total" ).text(ui.value + "%");
      }
    });
    $( "#mortgage_interest_total" ).text( $( "#mortgage_interest" ).slider( "value" ) );


    $( "#additional_cash" ).slider({
      range: "min",
      min:3,
      max: 100,
      value:2,
      slide: function( event, ui ) {
        $( "#additional_cash_total" ).text("$" +  ui.value );
      }
    });
    $( "#additional_cash_total" ).text( $( "#additional_cash" ).slider( "value" ) );

     $( "#monthly_income" ).slider({
      range: "min",
      min:3,
      max: 100,
      value:2,
      slide: function( event, ui ) {
        $( "#monthly_income_total" ).text("$" +  ui.value );
      }
    });
    $( "#monthly_income_total" ).text( $( "#monthly_income" ).slider( "value" ) );

     $( "#monthly_expenses" ).slider({
      range: "min",
      min:3,
      max: 100,
      value:2,
      slide: function( event, ui ) {
        $( "#monthly_income_total" ).text("$" +  ui.value );
      }
    });
    $( "#monthly_expenses_total" ).text( $( "#monthly_expenses" ).slider( "value" ) );

     $( "#new_property" ).slider({
      range: "min",
      min: 30,
      max: 1000,
      value: 200,
      slide: function( event, ui ) {
        $( "#new_property_total" ).text("$" +  ui.value );
      }
    });
    $( "#new_property_total" ).text( $( "#new_property" ).slider( "value" ) );


    $( "#down_payment" ).slider({
      range: "min",
      min:3,
      max: 100,
      value:2,
      slide: function( event, ui ) {
        $( "#down_payment_total" ).text(ui.value + "%");
      }
    });
    $( "#down_payment_total" ).text( $( "#down_payment" ).slider( "value" ) );


    $( "#household_income" ).slider({
      range: "min",
      min:3,
      max: 100,
      value:2,
      slide: function( event, ui ) {
        $( "#household_income_total" ).text("$" +  ui.value );
      }
    });
    $( "#household_income_total" ).text( $( "#household_income" ).slider( "value" ) );



$(window).on("load",function(){
        
        $(".scroll_sl").mCustomScrollbar({
          scrollButtons:{enable:true},
          theme:"light-thick",
          scrollbarPosition:"outside"
        });
        
      });


// $(".readmore_btn").click(function(){
//       var moredetail=$(this).attr("data-detail");
//       $("#"+moredetail).slideToggle();
//       $(this).toggleClass("active");

//       if($(this).hasClass('active')){
//             $(this).text("View Less");
//           }else{
//             $(this).text("Read More");
//           }
      
//  });

//chart







/*~~~~~~~ 02. Window Scroll  ~~~~~~~~*/

$('.scrollTop').click(function() {

    $('html, body').animate({scrollTop: 0}, 800);

    return false;

});



$(window).scroll(function() {

    if ($(this).scrollTop() > 100) {

        $('.scrollTop').fadeIn();

        $('.headerMain').addClass('has_sticky');

    } else {

        $('.scrollTop').fadeOut();

        $('.headerMain').removeClass('has_sticky'); 

    }

}); 


/* ------| A. Svg Rendering In Browser |--------- */



function svgConvert(svgClass) {

    $(svgClass).each(function() {        

        var $img = $(this);

        var imgID = $img.attr('id');

        var imgClass = $img.attr('class');

        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {

          /* Get the SVG tag, ignore the rest */

          var $svg = $(data).find('svg');

          /* Add replaced image's ID to the new SVG */

          if (typeof imgID !== 'undefined') {

              $svg = $svg.attr('id', imgID);

          }

          /* Add replaced image's classes to the new SVG */

          if (typeof imgClass !== 'undefined') {

              $svg = $svg.attr('class', imgClass + ' svgIcon');

          }

          $svg = $svg.attr('fill', 'currentColor');

          /* Remove any invalid XML tags as per http://validator.w3.org */

          $svg = $svg.removeAttr('xmlns:a');

          /* Replace image with new SVG*/

          $img.replaceWith($svg);

      }, 'xml');

    });

}




});