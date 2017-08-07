$(document).ready(function(){


 



$('#dob').on('change',function(){

  var d = new Date();
  var day = d.getDate();
  var currentDate = moment().format("DD-MM-YYYY");
  currentDate =  moment(currentDate, "DD-MM-YYYY").format('MM/DD/YYYY');
  currentDate = new Date(currentDate);
  currentDate = currentDate.getTime();

  var dob = $("#dob").val();
  dob =  moment(dob, "DD-MM-YYYY").format('MM/DD/YYYY');
  dob = new Date(dob);
  dob = dob.getTime();
 

  if(currentDate < dob) {
    
    $("#checkFormAll").attr("value", "0");
    $("#checkDobVal").show();

  }else{

    $("#checkFormAll").attr("value", "1");
    $("#checkDobVal").hide();
  }

  
    
  

});



//match add and edit staff and initailize datrangepicker

var segments = $(location).attr('href').split("/");


if(segments[4] == "add-staff" || segments[5] == "post-job") {


    var startDate = moment().format("DD-MM-YYYY");
    var endDate = startDate;
    endDate = moment(endDate, "DD-MM-YYYY").format('MM/DD/YYYY');
    endDate = moment(endDate).add(30, 'days').format('DD-MM-YYYY');
     
    $('.dateRangePickerAddStaff').daterangepicker({
        "drops": "up",
        "autoApply": true,
        startDate: startDate,
        endDate: endDate,
        locale: {
          format: 'DD-MM-YYYY',
           "daysOfWeek": ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"],
                "monthNames": ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"]
        },
    }, function(start, end, label) {
     // console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
    });

}









  $('body').on('focus',".dateRangePickerAddStaff", function(){
    
    var segments = $(location).attr('href').split("/");

    var currerntId = $(this).attr("id");
    var startDate = moment().format("DD-MM-YYYY");
    var endDate = startDate;
    endDate = moment(endDate, "DD-MM-YYYY").format('MM/DD/YYYY');
    endDate = moment(endDate).add(30, 'days').format('DD-MM-YYYY');


    if(segments[4] == "add-staff"){

     
        $('#'+currerntId).daterangepicker({
          "drops": "up",
          "autoApply": true,
           startDate: startDate,
            endDate: endDate,
            
          locale: {
            format: 'DD-MM-YYYY',
            "daysOfWeek": ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"],
            "monthNames": ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"]

          },
        }, function(start, end, label) {
         // console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
        });



    }else{

      $('#'+currerntId).daterangepicker({
        "drops": "up",
        "autoApply": true,
          
        locale: {
          format: 'DD-MM-YYYY',
          "daysOfWeek": ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"],
          "monthNames": ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"]

        },
      }, function(start, end, label) {
       // console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
      });


    }
  

  })




// date range picker for add staff page.
$('body').on('focus',".dateRangePickerAddStaffMore", function(){
   
    var inputLength = $("#add-date-from-to input").length-1;
    var actInputLength = $("#add-date-from-to input").length;
    
   
    $("#dateFrom"+actInputLength).css("border", "");  
      
    var startDate = $("#dateFrom"+inputLength+"").val().split(' - ')[1];
  
    startDate = moment(startDate, "DD-MM-YYYY").format('MM/DD/YYYY');
    startDate = moment(startDate).add(1, 'days').format('DD-MM-YYYY');

    var endDate = startDate;
    endDate = moment(endDate, "DD-MM-YYYY").format('MM/DD/YYYY');
    endDate = moment(endDate).add(10, 'days').format('DD-MM-YYYY');
     
    $(this).attr("id", "dateFrom"+actInputLength+"");
    
    $('#dateFrom'+actInputLength+'').daterangepicker({
        "drops": "up",
        "autoApply": true,
        startDate: startDate,
        endDate: endDate,
        locale: {
          format: 'DD-MM-YYYY',
          "daysOfWeek": ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"],
          "monthNames": ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"]
        },
        isInvalidDate: function (date) {
                
            var optionTexts = [];
            var dateArray = [];
            $("#add-date-from-to input").each(function() { 

             optionTexts.push($(this).val()) 

            });

            optionTexts.splice(-1,1);

            var i = 0;
            $.each(optionTexts, function( index, value ) {
                            
                          
             var start_date = value.split(' - ')[0];
             var end_date = value.split(' - ')[1];
              
             start_date = moment(start_date, "DD-MM-YYYY").format('MM/DD/YYYY');
             end_date = moment(end_date, "DD-MM-YYYY").format('MM/DD/YYYY');

             var currentDate = moment(start_date);
             currentDate =  currentDate.add(-   1, 'days');
             while (currentDate <= moment(end_date)) {

                dateArray.push( moment(currentDate).format('DD-MM-YYYY') )
                currentDate = moment(currentDate).add(1, 'days');

              }
              //alert(currentDate)
             i++;
            });
           
            var formatted = date.format('DD-MM-YYYY');
            return dateArray.indexOf(formatted) > false;
            
        }

    }, function(start, end, label) {
      console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
    });
}); 






//datepicker for header
$('.header_fromdate').datepicker({
    calendarWeeks: true,
    todayHighlight: true,
    autoclose: true,
    format: 'dd-mm-yyyy'
});
$('.header_todate').datepicker({
    calendarWeeks: true,
    todayHighlight: true,
    autoclose: true,
    format: 'dd-mm-yyyy'
});


$('.header_fromdate').on('change',function(){


    if($('.header_fromdate').val()=="" && $('.header_todate').val()=="")
    { 
      $("#star_filter").click();
    }


    if($('.header_fromdate').val()!="")
    { 
        $('.header_fromdate').removeClass('calender-border'); 
    }
    

    if($('.header_todate').val()!="")
    { 
        if($('.header_fromdate').val()!="")
          $("#star_filter").click();
    }
    else
    { 
      if($('.header_fromdate').val()!="")
        $('.header_todate').addClass('calender-border'); 
    }
});



$('.header_todate').on('change',function(){
    if($('.header_fromdate').val()=="" && $('.header_todate').val()=="")
    { 
      $("#star_filter").click();
    }

    if($('.header_fromdate').val()!="")
    { 
        $('.header_todate').removeClass('calender-border'); 
    }

   if($('.header_fromdate').val()!="")
   { 
      if($('.header_todate').val()!="")
       $("#star_filter").click();
   }
   else
   { 
      if($('.header_todate').val()!="")
      $('.header_fromdate').addClass('calender-border'); 
   }
});

$('.footer_fromdate').on('change',function(){
       if($('.footer_fromdate').val()!="")
         $('.footer_fromdate').removeClass('calender-border'); 
});

$('.footer_todate').on('change',function(){
       if($('.footer_todate').val()!="")
         $('.footer_todate').removeClass('calender-border'); 
});

//datepicker for footer
$('.footer_fromdate').datepicker({
    calendarWeeks: true,
    todayHighlight: true,
    autoclose: true,
    format: 'dd-mm-yyyy'
});
$('.footer_todate').datepicker({
    calendarWeeks: true,
    todayHighlight: true,
    autoclose: true,
    format: 'dd-mm-yyyy'
});

// $('.slide-circle-left').on('click',function(){
//     if($("body").hasClass("transform-box-right")){
//       $("body").removeClass("transform-box-right");
//   } else{
//        $("body").addClass("transform-box-left");
//   } 
     

// });

// $('.slide-circle-right').on('click',function(){
//   if($("body").hasClass("transform-box-left")){
//       $("body").removeClass("transform-box-left");
//   } else{
//         $("body").addClass("transform-box-right");
//   } 
        
// });
//var dobDate = new Date("07-02-2010");
//$('#dob').datepicker('update');  //update the bootstrap datepicker
 
//intitilize datepicker
// $('#dob').datepicker({

//     calendarWeeks: true,
//     todayHighlight: true,
//     autoclose: true,
//     format: 'dd-mm-yyyy',
//     useCurrent: true,
//     startView: 2,
//     //setDate: new Date()
// });



$('body').on('focus',"#dob", function(){
console.log("ypopop");
   var qsFromDate = '2017-05-10';
 // // $("#dob").datepicker("setDate", new Date(qsFromDate));
 //  $("#dob").datepicker("startView", 2);
 //  $('#dob').datepicker('update')


  
   $('#dob').datepicker({

        calendarWeeks: true,
        todayHighlight: true,
        autoclose: true,
        useCurrent: true,
        format: 'dd-mm-yyyy',
        startView: 2,
        setDate: new Date(qsFromDate)

    });

});

// $('.input-group.date').datepicker({
//     calendarWeeks: true,
//     todayHighlight: true,
//     autoclose: true,
//     format: 'dd-mm-yyyy'
// });

// // alert("Sdfsd");
// $('body').on('focus',".input-group.date", function(){
   
//     $('.input-group.date').datepicker({
//         calendarWeeks: true,
//         todayHighlight: true,
//         autoclose: true,
//         format: 'dd-mm-yyyy'
//     });
// });


$('.datepickerFrom').datepicker({
    calendarWeeks: true,
    todayHighlight: true,
    autoclose: true,
    format: 'dd-mm-yyyy'
});


// alert("Sdfsd");
$('body').on('focus',".datepickerFrom", function(){
   
    $('.input-group.date').datepicker({
        calendarWeeks: true,
        todayHighlight: true,
        autoclose: true,
        format: 'dd-mm-yyyy'
    });
});

$('.datepickerTo').datepicker({
    calendarWeeks: true,
    todayHighlight: true,
    autoclose: true,
    format: 'dd-mm-yyyy'
});


// alert("Sdfsd");
$('body').on('focus',".datepickerTo", function(){
   
    $('.input-group.date').datepicker({
        calendarWeeks: true,
        todayHighlight: true,
        autoclose: true,
        format: 'dd-mm-yyyy'
    });
});


// Method 1 - uses 'data-toggle' to initialize
$('[data-toggle="myToolTip"]').tooltip();   

$('[data-toggle="creditScoreToolTip"]').tooltip({
        placement : 'top',
        html : true
    });

$('[data-toggle="creditScoreToolTip1"]').tooltip({
        placement : 'top',
        html : true
    });
$('[data-toggle="creditScoreToolTip2"]').tooltip({
        placement : 'top',
        html : true
    });
$('[data-toggle="rating_comment"]').tooltip({
        placement : 'top',
        html : true
    });


/* - - - - - - - - - - - - - - - - - - - */

// Method 2 - uses the id, class or native tag, could use .btn as class 

$('button').tooltip();

// options set in JS by class
    $(".tip-top").tooltip({
        placement : 'top'
    });
    $(".tip-right").tooltip({
        placement : 'right'
    });
    $(".tip-bottom").tooltip({
        placement : 'bottom'
    });
    $(".tip-left").tooltip({
        placement : 'left',
        html : true
    });

    $(".tip-auto").tooltip({
        placement : 'auto',
        html : true
    });

});


$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

     $('.logo-scroll-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

       


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   

});



$(function(){
$('.input-group.date').datepicker({
    calendarWeeks: true,
    todayHighlight: true,
    autoclose: true,
    format: 'dd-mm-yyyy'
});  

});








    // $(document).ready(function() {

    //   var owl = $("#owl-demo");

    //   owl.owlCarousel({

        // Define custom and unlimited items depending from the width
        // If this option is set, itemsDeskop, itemsDesktopSmall, itemsTablet, itemsMobile etc. are disabled
        // For better preview, order the arrays by screen size, but it's not mandatory
        // Don't forget to include the lowest available screen size, otherwise it will take the default one for screens lower than lowest available.
        // In the example there is dimension with 0 with which cover screens between 0 and 450px
        
    //     itemsCustom : [
    //      [0, 1],
    //       [450, 1],
    //       [600, 2],
    //       [700, 2],
    //       [1000, 3],
    //       [1200, 4],
    //       [1400, 6],
    //       [1600, 6]
    //     ],
    //     navigation : true

    //   });

    // });
      
    
    
    
     //  window.onload=function(){
     //  $('.selectpicker').selectpicker();
     //  $('.rm-mustard').click(function() {
     //    $('.remove-example').find('[value=Mustard]').remove();
     //    $('.remove-example').selectpicker('refresh');
     //  });
     //  $('.rm-ketchup').click(function() {
     //    $('.remove-example').find('[value=Ketchup]').remove();
     //    $('.remove-example').selectpicker('refresh');
     //  });
     //  $('.rm-relish').click(function() {
     //    $('.remove-example').find('[value=Relish]').remove();
     //    $('.remove-example').selectpicker('refresh');
     //  });
     //  $('.ex-disable').click(function() {
     //      $('.disable-example').prop('disabled',true);
     //      $('.disable-example').selectpicker('refresh');
     //  });
     //  $('.ex-enable').click(function() {
     //      $('.disable-example').prop('disabled',false);
     //      $('.disable-example').selectpicker('refresh');
     //  });

     //  // scrollYou
     // // $('.scrollMe .dropdown-menu').scrollyou();

     //  //prettyPrint();
     //  };
   
    
    
    
    





    // $(document).ready(function() {

    //     $('#snavvy').snavvy({ menuItems: '#snavvy-links' });
    //      });

  

    
  $(document).ready(function() {

        $(window).scroll(function(){
           
          var sticky = $('.top'),
              scroll = $(window).scrollTop();

          if (scroll >= 5) sticky.addClass('sticky-head');
          else sticky.removeClass('sticky-head');

        });

       
        $('.breadcrumb-block').addClass('after-fixed');



        // $(window).scroll(function(){
        //   var sticky = $('.search-results-wrap'),
        //       scroll = $(window).scrollTop();

        //   if (scroll >= 50) sticky.addClass('result-top');
        //   else sticky.removeClass('result-top');
        // });


    });


 $(document).ready(function() {   


  var pathname = window.location.pathname; // Returns path only   
  var url      = window.location.href;     // Returns full URL  

  var segment = url.split("/");


  if(segment[4] == "admin"){

    $(".head-wrap").addClass("admin-head");

  }

  var segments = url.split( '/search-results' );    
  var action = segments[3];   
  var id = segments[4];  

 // $(window).scroll(function(){    
 //    var sticky = $('.top-filters'),   
 //        scroll = $(window).scrollTop();   

 //    if (scroll >= 120) {
 //      sticky.addClass('fixed');  
 //      $(".search-results-wrap").addClass("result-top"); 
 //      $("body").addClass("location-wrap")
 //      } 
 //     else {

 //     sticky.removeClass('fixed');
 //         $(".search-results-wrap").removeClass("result-top");
 //          $("body").removeClass("location-wrap")
 //      //$('.top').removeClass('fixed');
 //      }
 //   }); 

   
});

//  $(window).resize(function() {
//     var containerWidth = $(window).width();
//     if (containerWidth => 1080) {

//         $(window).scroll(function(){    
//           var sticky = $('.top-filters'),   
//               scroll = $(window).scrollTop();   
    
//           if (scroll >= 10) sticky.addClass('fixed');   
//            else sticky.removeClass('fixed');
//             $('.top').removeClass('fixed');
//          }); 
// }
//     else{


//     }


//   });
  
    // $(document).ready(function() {
    
    //     $(setup)

    //     function setup() {
    //       $('#intro select').zelect({ placeholder:'Plz select...' })
    //     }
        
        
        
    
        
        
    
    // });
 
   
    $(document).ready(function() {
    
        
        $('ul.dropdown-menu').on('click', function(event){
            event.stopPropagation();
        });
    });
    


  $( function() {

    if(localStorage.getItem("staff_range_min") != "" && localStorage.getItem("staff_range_max") != ""){

        var slider_value_min = localStorage.getItem("staff_range_min");
        var slider_value_max = localStorage.getItem("staff_range_max");
        
      

    }else{

        var slider_value_min = 100;
        var slider_value_max = 2000;

    }

    $( "#slider-range-min" ).slider({
      range: true,
      //value: localStorage.getItem("staff_range"),
      values: [ slider_value_min, slider_value_max ],
      min: 100,
      max: 2000,
      slide: function( event, ui ) {


        $( "#range_min" ).val(ui.values[ 0 ]);
        $( "#range_max" ).val(ui.values[ 1 ]);

        $( "#amount1" ).html(ui.values[ 0 ]);
        $( "#amount2" ).html(ui.values[ 1 ]);
        
        $( "#range_min" ).focus();

      }
    });

    $( "#slider-range-min" ).slider({
       change: function(event, ui) {
           // Do your stuff in here.
           $("#range_click").click();
           // You can trigger an event on anything you want:
           // $(selector).trigger(theEvent);

           // Or you can do whatever else/
       }
    });

    //$( "#range" ).val($( "#slider-range-min" ).slider( "value" ) );
    $( "#amount1" ).html($( "#slider-range-min" ).slider( "values", 0 ));
    $( "#amount2" ).html($( "#slider-range-min" ).slider( "values", 1 ));

   


  } );
// custom calendar js
   $(function() {
   $(".input-group-addon,.header_fromdate,.header_todate").on("click", function(e) {
     $("body").addClass("custom-cal");
     e.stopPropagation()
   });
   $(document).on("click", function(e) {
     if ($(e.target).is("body") === false) {
       $("body").removeClass("custom-cal");
     }
   });
 });
var pathname = window.location.pathname; // Returns path only
var url      = window.location.href;     // Returns full URL
var segments = url.split( '/' );
var action = segments[3];
var id = segments[4];

if(id == ""){

   $("body").addClass("home-body");
}
else{

  $("body").removeClass("home-body");
}

  $(document).ready(function() {
  
    var maxHeight = 0;
    $('.coman-height').each(function() {
     maxHeight = maxHeight > $(this).outerHeight(true) ? maxHeight : $(this).height();
     
   });
    console.log("max-height:"+maxHeight);
   $('.coman-height').each(function() {
    
    $(this).attr("style","height: "+maxHeight+"px;");
   });

   // $('.coman-height').each(function() {
   //   maxHeight = maxHeight > $(this).outerHeight(true) ? maxHeight : $(this).height();
   // });

   // $('.coman-height').each(function() {
   //   $(this).outerHeight(maxHeight);
   // });


  $( document ).on( "click",".add-height", function() {  
   $(".coman-height").attr("style","");
   adjustheight();
});
    $( document ).on( "click",".remove-height", function() {  
   $(".coman-height").attr("style","");
   adjustheight();
});
 });


  function adjustheight()
  {   




    var maxHeight = 0;
    $('.coman-height').each(function() {
     maxHeight = maxHeight > $(this).outerHeight(true) ? maxHeight : $(this).height();     
   });
    console.log("max-height:"+maxHeight);

    //add 20px more height
     if($("#add-date-from-to .countFrom").length == 2){

      maxHeight +=140;
    }else{

      maxHeight +=60;

    }
    


   $('.coman-height').each(function() {
    
    $(this).attr("style","height: "+maxHeight+"px;");
   });



  }



 
 
//  $(document).ready(function() {
//      $('#payment-form').bootstrapValidator({
//          message: 'This value is not valid',
//          feedbackIcons: {
//              valid: 'glyphicon glyphicon-ok',
//              invalid: 'glyphicon glyphicon-remove',
//              validating: 'glyphicon glyphicon-refresh'
//          },
//     submitHandler: function(validator, form, submitButton) {
//                       $(".ajax-loader").show();
//                      // createToken returns immediately - the supplied callback submits the form if there are no errors
//                      Stripe.card.createToken({
//                          number: $('.card-number').val(),
//                          cvc: $('.card-cvc').val(),
//                          exp_month: $('.card-expiry-month').val(),
//                          exp_year: $('.card-expiry-year').val()
                        
//                      }, stripeResponseHandler);
//                      return false; // submit from callback
//          },
//          fields: {

            
      
            
//       // cardholdername: {
//       //            validators: {
//       //                notEmpty: {
//       //                    message: 'The card holder name is required and can\'t be empty'
//       //                },
//       //     stringLength: {
//       //                    min: 6,
//       //                    max: 70,
//       //                    message: 'The card holder name must be more than 6 and less than 70 characters long'
//       //                }
//       //            }
//       //        },
//       cardnumber: {
//                 selector: '#cardnumber',
//                              validators: {
//                                  notEmpty: {
//                                      message: 'The credit card number is required and can\'t be empty'
//                                  },
//                       creditCard: {
//                         message: 'The credit card number is invalid'
//                       },
//                              }
//                  },
//         expMonth: {
//                  selector: '[data-stripe="exp-month"]',
//                  validators: {
//                      notEmpty: {
//                          message: 'The expiration month is required'
//                      },
//                      digits: {
//                          message: 'The expiration month can contain digits only'
//                      },
//                      callback: {
//                          message: 'Expired',
//                          callback: function(value, validator) {
//                              value = parseInt(value, 10);
//                              var year         = validator.getFieldElements('expYear').val(),
//                                  currentMonth = new Date().getMonth() + 1,
//                                  currentYear  = new Date().getFullYear();
//                              if (value < 0 || value > 12) {
//                                  return false;
//                              }
//                              if (year == '') {
//                                  return true;
//                              }
//                              year = parseInt(year, 10);
//                              if (year > currentYear || (year == currentYear && value > currentMonth)) {
//                                  validator.updateStatus('expYear', 'VALID');
//                                  return true;
//                              } else {
//                                  return false;
//                              }
//                          }
//                      }
//                  }
//              },
//              expYear: {
//                  selector: '[data-stripe="exp-year"]',
//                  validators: {
//                      notEmpty: {
//                          message: 'The expiration year is required'
//                      },
//                      digits: {
//                          message: 'The expiration year can contain digits only'
//                      },
//                      callback: {
//                          message: 'Expired',
//                          callback: function(value, validator) {
//                              value = parseInt(value, 10);
//                              var month        = validator.getFieldElements('expMonth').val(),
//                                  currentMonth = new Date().getMonth() + 1,
//                                  currentYear  = new Date().getFullYear();
//                              if (value < currentYear || value > currentYear + 100) {
//                                  return false;
//                              }
//                              if (month == '') {
//                                  return false;
//                              }
//                              month = parseInt(month, 10);
//                              if (value > currentYear || (value == currentYear && month > currentMonth)) {
//                                  validator.updateStatus('expMonth', 'VALID');
//                                  return true;
//                              } else {
//                                  return false;
//                              }
//                          }
//                      }
//                  }
//              },
//             cvv: {
//               selector: '#cvv',
//                      validators: {
//                          notEmpty: {
//                              message: 'The cvv is required and can\'t be empty'
//                          },
//               cvv: {
//                              message: 'The value is not a valid CVV',
//                              creditCardField: 'cardnumber'
//                          }
//                    }
//              },
//           }
//      });
//  });

// var stripePublicationKey = $("#StripePublicationKey").val();

// Stripe.setPublishableKey(stripePublicationKey);

// function stripeResponseHandler(status, response) {
   
//     if (response.error) {
//        $(".ajax-loader").hide();
//        maketoast("info", response.error.message); 

//       $(".ajax-loader").hide();
//       $('.error')
//         .removeClass('hide')
//         .find('.alert')
//         .text(response.error.message);
//     } else {
//       // token contains id, last4, and card type
//       var token = response['id'];
//       //alert(token);
//       // insert the token into the form so it gets submitted to the server
     
//       $('#stripeToken').val(token);
//       $("#paymentCheck").val(1);
//       $("#stripePaymentCheck").val(1);
      
//       $("#stripeTrigger").click();
//       //$form.get(0).submit();
//     }
//   }


// var select = $(".card-expiry-year"),
//   year = new Date().getFullYear();
  
//   for (var i = 0; i < 20; i++) {
//       select.append($("<option value='"+(i + year)+"' "+(i === 0 ? "selected" : "")+">"+(i + year)+"</option>"))
//   }


   

// $('#epayButton').on('click',function(){
   
//    // // paymentwindow.open()
//    // $('#approveModal').modal('hide');
//    //  paymentwindow = new PaymentWindow({
//    //       'merchantnumber': "8020578",
//    //       'amount': "10095",
//    //       'currency': "DKK"
//    //   });
    
//    //  $("iframe #epay_frame").contents().find("#epay_main").css("border-color", "blue");
//    //  // paymentwindow.append('payment-modal-body');
//    //   paymentwindow.open();
//    //   //$('#stripePaymentModal').modal('show');
//    //   //$("#epay_main").css("display", "block");
//    $(".ajax-loader").show();

//    var amount = $("#amount").val();

   
//     // use setTimeout() to execute
//     setTimeout(showpanel, 3100);
//     var MarchantId = $("#MarchantId").val();
//     $(".ajax-loader").show();
//     paymentwindow = new PaymentWindow({
//        'merchantnumber': MarchantId,
//        'amount': amount,
//        'currency': "DKK",
//        'windowstate': "4",
//        //'paymentcollection': "1",
//        'iframeheight': "400",
//        'iframewidth': "100%",
//        'backgroundcolor' :"A7A7A7",
//        'cssurl': 'https://jobkeeper.dk/app/assets/frontend/custom/css/epay.css',
//        //'accepturl': "http://www.epay.dk"
//     });
//     paymentwindow.on('completed', function(params) { 

//         params = params.split('&');

//         var obj = {};

//         for(i=0; i < params.length; i++){
          
//           var params_obj = params[i].split('=');
//           //obj = str1[0];
//           obj[params_obj[0]] = [params_obj[1]];
//         }
        
//         var obj1 = {};
//         $.each(obj, function( index, value ) {
          
//           obj1[index] = value[0]; 
          
//         });  


//         obj1.toString=function() {
          
//           return 'a='+this.a+', b='+this.b;
          
//         };
//         $(".ajax-loader").show();

//         var response = JSON.stringify(obj1);
//         $("#epayReponse").val(response);
//          //alert('The Payment Window was completed: ' + params); 
        
//         $("#paymentCheck").val(1);
//         $("#epayPaymentCheck").val(1);
//         $("#epayTrigger").click();
//       }

//     );

//     // paymentwindow.on('precompleted', function() { 

//     //  // alert("hello");
//     //    //$(".ajax-loader").show();

//     // }); 

//     paymentwindow.on('declined', function() {

//          // alert('The Payment Window was declined'); 
//         $(".ajax-loader").hide();
//         //maketoast("info", 'The Payment Window was declined'); 

//       }
//     );

//     paymentwindow.on('close', function() { 
      
//        alert('The Payment Window was closed.') 

//       }

//     );

//      paymentwindow.on('precompleted', function(error) { 
     
//        //$(".ajax-loader").show();
//         //If OK:
//         console.log(paymentwindow);
//         paymentwindow.submit(); 
//     });

//    paymentwindow.on('feecalculated', function(fee){

//         //alert(fee);
//     });
    
//    paymentwindow.append('payment-modal-body');
//    paymentwindow.open();
//    //$(".ajax-loader").hide();
//    $('#approveModal').modal('hide');
//    $('#epayPaymentModal').modal('show');
//    $("#epay_main").css("display", "block");

// });


function showpanel(){
  
  $(".ajax-loader").hide();

}













/***************************Strip latest working**********************************/
// var handler = StripeCheckout.configure({

//   key: 'pk_test_72Sp1OOV3Zf0wm5IJOH0r0RL',
//   image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
//   locale: 'auto',
//   currency:'DKK',
//   token: function(token) {
     
//     $('#stripeToken').val(token.id);
//     $("#paymentCheck").val(1);
//     $("#stripePaymentCheck").val(1);
//     $(".ajax-loader").show();
//     $("#stripeTrigger").click();
    
//   }
// });
// var CreditScoreHandler = StripeCheckout.configure({

//   key: 'pk_test_72Sp1OOV3Zf0wm5IJOH0r0RL',
//   image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
//   locale: 'auto',
//   currency:'DKK',
//   token: function(token) {
    
//     $('#stripeToken').val(token.id);
//     $("#paymentCheck").val(1);
//     $("#stripePaymentCheck").val(1);
//     $(".ajax-loader").show();
//     $("#CreditScoreStripeTrigger").click();
    
//   }
// });
// $(document).ready(function(){

//     $("#stripeWindow").click(function(e){
//         var amount = parseInt($("#amount").val()+"00");
//         $('#approveModal').modal('hide');
//        // Open Checkout with further options:
//         handler.open({
//           name: 'Jobkeeper',
//           description: 'Payment for rent request approvel',
//           amount: amount


//         });

        
//         // Open Checkout with further options:
//         //e.preventDefault();
     
//     });

//     $("#stripeWindowForCreditScore").click(function(e){
//         var amount = parseInt($("#amount").val()+"00");
//          $('body').css('padding-right',0);
//         $('#creditScorePaymentModal').modal('hide');
//        // Open Checkout with further options:
//         CreditScoreHandler.open({
//           name: 'Jobkeeper',
//           description: 'Payment for Credit Score',
//           amount: amount

//         });
//         // Open Checkout with further options:
//         //e.preventDefault();
     
//     });
// });
/**********************************************************************/


/********************************epay***********************************/
$('#epayButton').on('click',function(){
   
    
    $('#approveModal').modal('hide');

    var amount = $("#amount").val();

    
    if(decimalPlaces(amount) > 0 && decimalPlaces(amount) == 1) {

      amount = amount +"0";
      amount = amount.replace(/\./g,'');

    }else{
      
      amount = parseInt( amount +"00");
      
    } 

    //alert(amount);

    var MarchantId = $("#MarchantId").val();


    var seller_id_requested = $("#seller_id_requested").val();
    var staff_name_requested = $("#requested_staff_name").val();
    var rentId = $("#requestId").val();
    staff_name_requested = staff_name_requested.replace(/ /g,"_");

    var amountWithoutVat = $("#commissionWithoutVat").val();

    //alert(amountWithoutVat);


    var amountWithVat = $("#commissionVat").val();

   // alert(amountWithVat);

    var profession_name  = $("#staff_service_name").val();

    var receipt_check = $("#receipt_check").val();

    var buyer_id = $("#buyer_id").val();

    //alert(buyer_id);


    var uri = 'rent_id='+rentId+'&seller_id='+seller_id_requested+'&staff_name='+staff_name_requested+'&amountWithoutVat='+amountWithoutVat+'&amountWithVat='+amountWithVat+'&profession_name='+profession_name+'&amountWithVat='+amountWithVat+'&receipt_check='+receipt_check+'&buyer_id='+buyer_id+'';
    
    uri = encodeURIComponent(uri);

    var email = $("#compamyEmail").val();

    paymentwindow = new PaymentWindow({
        'merchantnumber':MarchantId,
        'amount': amount,
        'currency': "DKK",
        'windowstate': "1",
        'ownreceipt' : 1,
        //'mailreceipt' : email,
        'accepturl' : 'https://dev.jobkeeper.dk/?'+uri+'#/rent-requests'
    });
    paymentwindow.on('completed', function(params) { 
        //alert("ehhllo");
        params = params.split('&');

    });

   

    paymentwindow.on('declined', function() {

        // alert('The Payment Window was declined'); 
        $(".ajax-loader").hide();
        maketoast("info", 'The Payment Window was declined'); 

    });

    paymentwindow.on('close', function() { 
      
       //alert('The Payment Window was closed.') 

    });

     paymentwindow.on('precompleted', function(error) { 
     
       //$(".ajax-loader").show();
        //If OK:
       // alert("dfd");
        paymentwindow.submit(); 
    });

   paymentwindow.on('feecalculated', function(fee){

        //alert(fee);
    });
   
   paymentwindow.open();
   

});



/********************************epay for job***********************************/
$('#epayButtonJob').on('click',function(){


    $("#approveModal").modal("hide");
     
    var staff_id = $("#chooseStaff").val();

    
    if(staff_id == ""){

        
        $("#select-staff-cond").show();

    }else{

      $("#select-staff-cond").hide();

       $('#myModalCalender').modal('hide');

        var amount = $("#commission_final_payable_amount").val(); 

        //alert(amount);

        var amount_with_decimal = amount; 

        if(decimalPlaces(amount) > 0 && decimalPlaces(amount) == 1) {

            amount = amount +"0";

            amount = amount.replace(/\./g,'');

        } else if(decimalPlaces(amount) > 0 && decimalPlaces(amount) == 2){

            amount = amount.replace(/\./g,'');

        } else{

            amount = parseInt( amount +"00");
        }
            
        
            
        

          //alert(amount);

          var MarchantId = $("#MarchantId").val();


          var seller_id_requested = $("#seller_id_requested").val();


          var buyer_id = $("#buyer_id_requested").val();


          var staff_name_requested = $("#chooseStaff option:selected").text();

         
          var jobId = $("#requestId").val();

          staff_name_requested = staff_name_requested.replace(/ /g,"_");

         
          /**************************commission amount***************************/

          var commission_final_amount = $("#commission_final_payable_amount").val();
          //alert(commission_final_amount + "commission_final_amount");

          var commissionWithoutVat = $("#commission_amount").val();

         // alert(commissionWithoutVat + " commissionWithoutVat");
 
          var commissionVat = $("#commission_tax_amount").val();

          //alert(commissionVat + " commissionVat");

          /****************************************************************/


          /**************************Job apply amount amount***************************/

          var actual_price = $("#actual_price").val();

          var total_price = $("#amount").val();

          var tax_on_actual_price_commission = $("#tax_on_actual_price_commission").val();

          var commission_on_actual_price = $("#commission_on_actual_price").val();
          
          // alert(total_price + "total_price");
          // alert(tax_on_actual_price_commission + "tax_on_actual_price_commission");
          // alert(commission_on_actual_price + "commission_on_actual_price");



          /****************************************************************/

         
          var profession_name  = $("#job_service_name").val();

          //alert(profession_name);

          var receipt_check = $("#receipt_check").val();

          var requested_hours = $(".totalHours").val();

          
          
          var from_date = $("#from_date").val();

          var to_date = $("#to_date").val();
            
          //alert(to_date + " to_date");
         


          var uri = 'job_id='+jobId+'&staff_id='+staff_id+'&seller_id='+seller_id_requested+'&actual_price='+actual_price+'&total_price='+total_price+'&commission_on_actual_price='+commission_on_actual_price+'&tax_on_actual_price_commission='+tax_on_actual_price_commission+'&profession_name='+profession_name+'&receipt_check='+receipt_check+'&buyer_id='+buyer_id+'&requested_hours='+requested_hours+'&final_payable_amount='+commission_final_amount+'&from_date='+from_date+'&to_date='+to_date+'&amount='+amount+'&amount_with_decimal='+amount_with_decimal+'&commissionWithoutVat='+commissionWithoutVat+'&commissionVat='+commissionVat+'';
          
          uri = encodeURIComponent(uri);

          var email = $("#compamyEmail").val();

          paymentwindow = new PaymentWindow({
              'merchantnumber':MarchantId,
              'amount': amount,
              'currency': "DKK",
              'windowstate': "1",
              'ownreceipt' : 1,
              //'mailreceipt' : email,
              'accepturl' : 'https://dev.jobkeeper.dk/?'+uri+'#/jobs/job-detail/'+jobId
          });
          paymentwindow.on('completed', function(params) { 
              //alert("ehhllo");
              params = params.split('&');

          });

         

          paymentwindow.on('declined', function() {

              // alert('The Payment Window was declined'); 
              $(".ajax-loader").hide();
              maketoast("info", 'The Payment Window was declined'); 

          });

          paymentwindow.on('close', function() { 
            
             //alert('The Payment Window was closed.') 

          });

           paymentwindow.on('precompleted', function(error) { 
           
             //$(".ajax-loader").show();
              //If OK:
             // alert("dfd");
              paymentwindow.submit(); 
          });

         paymentwindow.on('feecalculated', function(fee){

              //alert(fee);
          });
         
         paymentwindow.open();


    }
    
   
   

});
/************************************************************************************************/
function decimalPlaces(num) {

  var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) { return 0; }
  return Math.max(
       0,
       // Number of digits right of decimal point.
       (match[1] ? match[1].length : 0)
       // Adjust for scientific notation.
       - (match[2] ? +match[2] : 0));
}



$('#epayWindowForCreditScore').on('click',function(){
   
    var amount =  $("#amount").val();

    
    if(decimalPlaces(amount) > 0 && decimalPlaces(amount) == 1) {

      amount = amount +"0";
      amount = amount.replace(/\./g,'');

    }else if(decimalPlaces(amount) > 0 && decimalPlaces(amount) == 2) {
      
       amount = amount.replace(/\./g,'');
      
    } else{

      amount = parseInt( amount +"00");

    }

    //alert(amount);
    

    var MarchantId = $("#MarchantId").val();
    var seller_id_requested = $("#seller_id_requested").val();
    var staff_name_requested = $("#requested_staff_name").val();
    var rentId = $("#requestId").val();
    var buyerId = $("#buyer_id_requested").val();
    staff_name_requested = staff_name_requested.replace(/ /g,"_");
    $('body').css('padding-right',0);
    $('#creditScorePaymentModal').modal('hide');

    var amountWithoutVat = $("#commissionWithoutVat").val();

    var receipt_check = $("#receipt_check").val();

    var amountWithVat = $("#commissionVat").val();

    var uri = 'paytype=cscore&rent_id='+rentId+'&seller_id='+seller_id_requested+'&staff_name='+staff_name_requested+'&buyer_id='+buyerId+'&amountWithoutVat='+amountWithoutVat+'&amountWithVat='+amountWithVat+'&receipt_check='+receipt_check+'';
    
    uri = encodeURIComponent(uri);

    var email = $("#compamyEmail").val();
    
    paymentwindow = new PaymentWindow({
        'merchantnumber':MarchantId,
        'amount': amount,
        'currency': "DKK",
        'windowstate': "1", 
        'ownreceipt' : 1,
        //'mailreceipt' : email,
        'accepturl' : 'https://dev.jobkeeper.dk/?'+uri+'#/rent-requests'
    });
    paymentwindow.on('completed', function(params) { 
        //alert("ehhllo");
        params = params.split('&');

    });

 paymentwindow.on('declined', function() {

        // alert('The Payment Window was declined'); 
        $(".ajax-loader").hide();
        maketoast("info", 'The Payment Window was declined'); 

    });

    paymentwindow.on('close', function() { 
      
       //alert('The Payment Window was closed.') 

    });

     paymentwindow.on('precompleted', function(error) { 
     
       //$(".ajax-loader").show();
        //If OK:
       // alert("dfd");
        paymentwindow.submit(); 
    });

   paymentwindow.on('feecalculated', function(fee){

        //alert(fee);
    });
   
   paymentwindow.open();
   

});  

// $('#select-state').selectize({
//     maxItems: 3,
//     onChange: function(value) {
            
      
//         if(value == null){


//           $(".category-error").show();
//           $("#checkFormAll").attr("value", "0");

//         }else{

//           $("#checkFormAll").attr("value", "1");
//           $(".category-error").hide();
//         }

//         $("#selected-categories").val(value);
//     }
// });






/************************************************************************/





//     (function($) {

//     $.fn.fSelect = function(options) {

//         if (typeof options == 'string' ) {
//             var settings = options;
//         }
//         else {
//             var settings = $.extend({
//                 placeholder: 'Select some options',
//                 numDisplayed: 3,
//                 overflowText: '{n} selected',
//                 searchText: 'Search',
//                 showSearch: true
//             }, options);
//         }


//         /**
//          * Constructor
//          */
//         function fSelect(select, settings, condition) {

//             if(condition == 0){

//               this.$select = $(select);
//               this.settings = settings;
//               this.create();
//             }else{

//               alert("hello");
//               this.$select = $(select);
//               this.settings = settings;
//               this.create();

//             }
            
//         }


//         /**
//          * Prototype class
//          */
//         fSelect.prototype = {
//             create: function() {

//                 alert("111");

//                 this.settings.multiple = this.$select.is('[multiple]');
//                 var multiple = this.settings.multiple ? ' multiple' : '';
//                 this.$select.wrap('<div class="fs-wrap' + multiple + '" tabindex="0" />');
//                 this.$select.before('<div class="fs-label-wrap"><div class="fs-label">' + this.settings.placeholder + '</div><span class="fs-arrow"></span></div>');
//                 this.$select.before('<div class="fs-dropdown hidden"><div class="fs-options"></div></div>');
//                 this.$select.addClass('hidden');
//                 this.$wrap = this.$select.closest('.fs-wrap');
//                 this.$wrap.data('id', window.fSelect.num_items);
//                 window.fSelect.num_items++;
//                 this.reload();
//             },

//             reload: function() {
//                 if (this.settings.showSearch) {
//                     var search = '<div class="fs-search"><input type="search" placeholder="' + this.settings.searchText + '" /></div>';
//                     this.$wrap.find('.fs-dropdown').prepend(search);
//                 }
//                 this.idx = 0;
//                 this.optgroup = 0;
//                 this.selected = [].concat(this.$select.val()); // force an array
//                 var choices = this.buildOptions(this.$select);
//                 this.$wrap.find('.fs-options').html(choices);
//                 this.reloadDropdownLabel();
//             },

//             destroy: function() {
//                 this.$wrap.find('.fs-label-wrap').remove();
//                 this.$wrap.find('.fs-dropdown').remove();
//                 this.$select.unwrap().removeClass('hidden');
//             },

//             buildOptions: function($element) {
//                 var $this = this;

//                 var choices = '';
//                 $element.children().each(function(i, el) {
//                     var $el = $(el);

//                     if ('optgroup' == $el.prop('nodeName').toLowerCase()) {
//                         choices += '<div class="fs-optgroup-label" data-group="' + $this.optgroup + '">' + $el.prop('label') + '</div>';
//                         choices += $this.buildOptions($el);
//                         $this.optgroup++;
//                     }
//                     else {
//                         var val = $el.prop('value');

//                         // exclude the first option in multi-select mode
//                         if (0 < $this.idx || '' != val || ! $this.settings.multiple) {
//                             var disabled = $el.is(':disabled') ? ' disabled' : '';
//                             var selected = -1 < $.inArray(val, $this.selected) ? ' selected' : '';
//                             var group = ' g' + $this.optgroup;
//                             choices += '<div class="fs-option' + selected + disabled + group + '" data-value="' + val + '" data-index="' + $this.idx + '"><span class="fs-checkbox"><i></i></span><div class="fs-option-label">' + $el.html() + '</div></div>';
//                             $this.idx++;
//                         }
//                     }
//                 });

//                 return choices;
//             },

//             reloadDropdownLabel: function() {
//                 var settings = this.settings;
//                 var labelText = [];

//                 this.$wrap.find('.fs-option.selected').each(function(i, el) {
//                     labelText.push($(el).find('.fs-option-label').text());
//                 });

//                 if (labelText.length < 1) {
//                     labelText = settings.placeholder;
//                 }
//                 else if (labelText.length > settings.numDisplayed) {
//                     labelText = settings.overflowText.replace('{n}', labelText.length);
//                 }
//                 else {
//                     labelText = labelText.join(', ');
//                 }

//                 this.$wrap.find('.fs-label').html(labelText);
//                 this.$wrap.toggleClass('fs-default', labelText === settings.placeholder);
//                 this.$select.change();
//             }
//         }


//         /**
//          * Loop through each matching element
//          */
//         /**
//          * Loop through each matching element
//          */
//         return this.each(function() {

//             var data = $(this).data('fSelect');

            

            

//              //alert(data + " 22");

//            if (!data) {
              
//                 data = new fSelect(this, settings, 0);
                
//                 $(this).data('fSelect', data);

//             }else{

//                data = void 0;

//                alert(data + " 111");
//               // alert(data + " 22");

//               // data = new fSelect(this, settings, 1);

//               // $(this).data('fSelect', data);


//             }

//             if (typeof settings == 'string') {
//                 data[settings]();
//             }
//         });
//     }


//     /**
//      * Events
//      */
//     window.fSelect = {
//         'num_items': 0,
//         'active_id': null,
//         'active_el': null,
//         'last_choice': null,
//         'idx': -1
//     };

//     $(document).on('click', '.fs-option:not(.hidden, .disabled)', function(e) {
//         var $wrap = $(this).closest('.fs-wrap');
//         var do_close = false;

//         if ($wrap.hasClass('multiple')) {
//             var selected = [];

//             // shift + click support
//             if (e.shiftKey && null != window.fSelect.last_choice) {
//                 var current_choice = parseInt($(this).attr('data-index'));
//                 var do_select = ! $(this).hasClass('selected');
//                 var min = Math.min(window.fSelect.last_choice, current_choice);
//                 var max = Math.max(window.fSelect.last_choice, current_choice);

//                 for (i = min; i <= max; i++) {
//                     $wrap.find('.fs-option[data-index='+ i +']')
//                         .not('.hidden, .disabled')
//                         .each(function() {
//                             do_select ?
//                                 $(this).addClass('selected') :
//                                 $(this).removeClass('selected');
//                         });
//                 }
//             }
//             else {
//                 window.fSelect.last_choice = parseInt($(this).attr('data-index'));
//                 $(this).toggleClass('selected');
//             }

//             $wrap.find('.fs-option.selected').each(function(i, el) {
//                 selected.push($(el).attr('data-value'));
//             });
//         }
//         else {
//             var selected = $(this).attr('data-value');
//             $wrap.find('.fs-option').removeClass('selected');
//             $(this).addClass('selected');
//             do_close = true;
//         }

//         $wrap.find('select').val(selected);
//         $wrap.find('select').fSelect('reloadDropdownLabel');

//         if (do_close) {
//             closeDropdown($wrap);
//         }
//     });

//     $(document).on('keyup', '.fs-search input', function(e) {
//         if (40 == e.which) { // down
//             $(this).blur();
//             return;
//         }

//         var $wrap = $(this).closest('.fs-wrap');
//         var matchOperators = /[|\\{}()[\]^$+*?.]/g;
//         var keywords = $(this).val().replace(matchOperators, '\\$&');

//         $wrap.find('.fs-option, .fs-optgroup-label').removeClass('hidden');

//         if ('' != keywords) {
//             $wrap.find('.fs-option').each(function() {
//                 var regex = new RegExp(keywords, 'gi');
//                 if (null === $(this).find('.fs-option-label').text().match(regex)) {
//                     $(this).addClass('hidden');
//                 }
//             });

//             $wrap.find('.fs-optgroup-label').each(function() {
//                 var group = $(this).attr('data-group');
//                 var num_visible = $(this).closest('.fs-options').find('.fs-option.g' + group + ':not(.hidden)').length;
//                 if (num_visible < 1) {
//                     $(this).addClass('hidden');
//                 }
//             });
//         }

//         setIndexes($wrap);
//     });

//     $(document).on('click', function(e) {
//         var $el = $(e.target);
//         var $wrap = $el.closest('.fs-wrap');

//         if (0 < $wrap.length) {

//             // user clicked another fSelect box
//             if ($wrap.data('id') !== window.fSelect.active_id) {
//                 closeDropdown();
//             }

//             // fSelect box was toggled
//             if ($el.hasClass('fs-label') || $el.hasClass('fs-arrow')) {
//                 var is_hidden = $wrap.find('.fs-dropdown').hasClass('hidden');

//                 if (is_hidden) {
//                     openDropdown($wrap);
//                 }
//                 else {
//                     closeDropdown($wrap);
//                 }
//             }
//         }
//         // clicked outside, close all fSelect boxes
//         else {
//             closeDropdown();
//         }
//     });

//     $(document).on('keydown', function(e) {
//         var $wrap = window.fSelect.active_el;
//         var $target = $(e.target);

//         // toggle the dropdown on space
//         if ($target.hasClass('fs-wrap')) {
//             if (32 == e.which) {
//                 $target.find('.fs-label').trigger('click');
//                 return;
//             }
//         }
//         // preserve spaces during search
//         else if (0 < $target.closest('.fs-search').length) {
//             if (32 == e.which) {
//                 return;
//             }
//         }
//         else if (null === $wrap) {
//             return;
//         }

//         if (38 == e.which) { // up
//             e.preventDefault();

//             $wrap.find('.fs-option.hl').removeClass('hl');

//             var $current = $wrap.find('.fs-option[data-index=' + window.fSelect.idx + ']');
//             var $prev = $current.prevAll('.fs-option:not(.hidden, .disabled)');

//             if ($prev.length > 0) {
//                 window.fSelect.idx = parseInt($prev.attr('data-index'));
//                 $wrap.find('.fs-option[data-index=' + window.fSelect.idx + ']').addClass('hl');
//                 setScroll($wrap);
//             }
//             else {
//                 window.fSelect.idx = -1;
//                 $wrap.find('.fs-search input').focus();
//             }
//         }
//         else if (40 == e.which) { // down
//             e.preventDefault();

//             var $current = $wrap.find('.fs-option[data-index=' + window.fSelect.idx + ']');
//             if ($current.length < 1) {
//                 var $next = $wrap.find('.fs-option:not(.hidden, .disabled):first');
//             }
//             else {
//                 var $next = $current.nextAll('.fs-option:not(.hidden, .disabled)');
//             }

//             if ($next.length > 0) {
//                 window.fSelect.idx = parseInt($next.attr('data-index'));
//                 $wrap.find('.fs-option.hl').removeClass('hl');
//                 $wrap.find('.fs-option[data-index=' + window.fSelect.idx + ']').addClass('hl');
//                 setScroll($wrap);
//             }
//         }
//         else if (32 == e.which || 13 == e.which) { // space, enter
//             e.preventDefault();

//             $wrap.find('.fs-option.hl').click();
//         }
//         else if (27 == e.which) { // esc
//             closeDropdown($wrap);
//         }
//     });

//     function setIndexes($wrap) {
//         $wrap.find('.fs-option.hl').removeClass('hl');
//         $wrap.find('.fs-search input').focus();
//         window.fSelect.idx = -1;
//     }

//     function setScroll($wrap) {
//         var $container = $wrap.find('.fs-options');
//         var $selected = $wrap.find('.fs-option.hl');

//         var itemMin = $selected.offset().top + $container.scrollTop();
//         var itemMax = itemMin + $selected.outerHeight();
//         var containerMin = $container.offset().top + $container.scrollTop();
//         var containerMax = containerMin + $container.outerHeight();

//         if (itemMax > containerMax) { // scroll down
//             var to = $container.scrollTop() + itemMax - containerMax;
//             $container.scrollTop(to);
//         }
//         else if (itemMin < containerMin) { // scroll up
//             var to = $container.scrollTop() - containerMin - itemMin;
//             $container.scrollTop(to);
//         }
//     }

//     function openDropdown($wrap) {
//         window.fSelect.active_el = $wrap;
//         window.fSelect.active_id = $wrap.data('id');
//         window.fSelect.initial_values = $wrap.find('select').val();
//         $wrap.find('.fs-dropdown').removeClass('hidden');
//         $wrap.addClass('fs-open');
//         setIndexes($wrap);
//     }

//     function closeDropdown($wrap) {
//         if ('undefined' == typeof $wrap && null != window.fSelect.active_el) {
//             $wrap = window.fSelect.active_el;
//         }
//         if ('undefined' !== typeof $wrap) {
//             // only trigger if the values have changed
//             var initial_values = window.fSelect.initial_values;
//             var current_values = $wrap.find('select').val();
//             if (JSON.stringify(initial_values) != JSON.stringify(current_values)) {
//                 $(document).trigger('fs:changed', $wrap);
//             }
//         }

//         $('.fs-wrap').removeClass('fs-open');
//         $('.fs-dropdown').addClass('hidden');
//         window.fSelect.active_el = null;
//         window.fSelect.active_id = null;
//         window.fSelect.last_choice = null;
//     }

// })(jQuery);






    
//$('.selectmulti').fSelect();
  
//   $(document).ready(function(){          

//     var stickyOffset = $('.top-filters').offset().top;
    
//     $(window).scroll(function(){

      
//       var sticky = $('.top-filters'),
//           scroll = $(window).scrollTop();
        
//       if (scroll >= stickyOffset){ 

//         sticky.addClass('fixed');
//         $(".search-results-wrap").addClass("result-top");  
         
//       }
//       else{ 

//           sticky.removeClass('fixed');
//           $(".search-results-wrap").removeClass("result-top");      
//        }
//     });            
   
// }); 