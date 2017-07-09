/*USING JQUERY TO HANDLE AJAX REQUESTS which is how we're going to get the data in the page.*/


/*use the $.getJSON method from jQuery to call my API route.  it's gonna run a function, which called updatefeedback */
	$(function() {
		  $.getJSON('api', updateFeedback);

			  $('.feedback-form').submit(function(e) {
				e.preventDefault(); /*to prevent that form from actually reloading the server. So I'm gonna do, and we get that variable called E from the event that gets detected by your browser. And we can say prevent the default behavior which would be to reload the page.*/
				$.post('api', { /*send something to our route,*/
					/*POST is a jQuery method that is going to send some data to a URL as POST data. Sort of like what would happen if somebody did fill the form out. So, this API route is going to get an object. And this is gonna correspond to the things that are in our form. So those are tagged with different IDs. Every one of the input fields has a different ID. So I'm gonna say feedback, form, name, for the name.*/
				  name: $('#feedback-form-name').val(), /*read the value from that element.*/
				  title: $('#feedback-form-title').val(),
				  message: $('#feedback-form-message').val()
				}, updateFeedback); /*run the update feedback method. So that it takes care of updating the page and reloading the new items.*/
			  });


		  function updateFeedback(data) {
				var output = ''; /* output variable is going to get populated with a copy of this html for each one of the items.*/
				   $.each(data,function(key, item) {
						 output += '     <div class="feedback-item item-list media-list">';
						 output += '       <div class="feedback-item media">';
						 output += '         <div class="feedback-info media-body">';
						 output += '           <div class="feedback-head">';
						 output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
						 output += '           </div>';
						 output += '           <div class="feedback-message">' + item.message + '</div>';
						 output += '         </div>';
						 output += '       </div>';
						 output += '     </div>';
				   });
			  $('.feedback-messages').html(output); /*locate the element with a class of feedback messages and then modify the html so that it matches my output variable.*/
		  }
	});
