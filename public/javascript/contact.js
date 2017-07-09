
$(document).ready(function(){ 
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });    
});

/*USING JQUERY TO HANDLE AJAX REQUESTS which is how we're going to get the data in the page.*/


/*use the $.getJSON method from jQuery to call my contact-api route.  it's gonna run a function, which called updateContact */
	$(function() {
		  $.getJSON('contact-api');
			  $('.contact-form').submit(function(e) {
				e.preventDefault(); /*to prevent that form from actually reloading the server. So I'm gonna do, and we get that variable called E from the event that gets detected by your browser. And we can say prevent the default behavior which would be to reload the page.*/
				$.post('contact-api', { /*send something to our route,*/
					/*POST is a jQuery method that is going to send some data to a URL as POST data. Sort of like what would happen if somebody did fill the form out. So, this contact-api route is going to get an object. And this is gonna correspond to the things that are in our form. So those are tagged with different IDs. Every one of the input fields has a different ID. So I'm gonna say feedback, form, name, for the name.*/
				  name: $('#name').val(), /*read the value from that element.*/
				  email: $('#email').val(),
				  message: $('#message').val(),
			      mobile: $('#mobile').val()
				}); /*run the update feedback method. So that it takes care of updating the page and reloading the new items.*/
			  });
	});



/*redirecting after submit button*/


function redirect()
{
    window.location.href="http://localhost:3000/contact";
}
