$(document).ready(function() {


// This block is for username

var new_span = $('<span></span>');
new_span.insertAfter('#username');
new_span.hide();
var check=new RegExp('^[a-zA-Z0-9]*$');

$( "#username" ).focus(function() {
  $(this).next("span").removeClass();
  $(this).next("span").text("infomessage");
  $(this).next( "span" ).css( "display", "inline" );
  $(this).next( "span" ).addClass( "info" );
});


$("#username").blur(function(){

   if( !$(this).val() )
   {
       $( this ).next("span").hide();
   };


   if (check.test($(this).val()))
   {
          $(this).next("span").removeClass();
          $(this).next("span").addClass('ok');
          $(this).next("span").text("OK");
   }
  else
  {

       $(this).next("span").removeClass();
       $(this).next("span").addClass('error');
       $(this).next("span").text("Error");
   };

});


// This block is for password

var new_span2 = $('<span></span>');
new_span2.insertAfter('#password');
new_span2.hide();

$( "#password" ).focus(function()
{
  $(this).next("span").removeClass();
  $(this).next("span").text("infomessage");
  $( this ).next( "span" ).css( "display", "inline" );
  $( this ).next( "span" ).addClass( "info" );
});


$("#password").blur(function()
{
   if( !$(this).val() ) {
       $( this ).next("span").hide();
};

   if ( $(this).val().length<8 )
   {
   $(this).next("span").removeClass();
   $(this).next("span").addClass('error');
   $(this).next("span").text("Error");
   }
   else {
     $(this).next("span").removeClass();
     $(this).next("span").addClass('ok');
     $(this).next("span").text("OK");

   };

});


// This block is for email


var new_span3 = $('<span></span>');
new_span3.insertAfter('#email');
new_span3.hide();


$( "#email" ).focus(function() {
  $(this).next("span").removeClass();
  $(this).next("span").text("infomessage");
  $( this ).next( "span" ).css( "display", "inline" );
  $( this ).next( "span" ).addClass( "info" );
});

var email = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");


$("#email").blur(function(){
   if( !$(this).val() ) {
       $( this ).next("span").hide();
   };

   if (email.test($(this).val()))
   {
         $(this).next("span").removeClass();
         $(this).next("span").addClass('ok');
         $(this).next("span").text("OK");

     }
   else
   {

     $(this).next("span").removeClass();
     $(this).next("span").addClass('error');
     $(this).next("span").text("Error");


 };

});



});
