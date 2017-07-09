var socket = io(); /*this is gonna load all the methods into this socket variable*/
var chatUsername = document.querySelector('#chat-username'); 
var chatMessage = document.querySelector('#chat-message');

socket.on('connect', function() { /*detect a connection and then excute whatever in the function if theres a connection*/
  var chatForm = document.forms.chatForm;   /*The document's object has a list of all the forms in the page and then we can just refer the forms by name as long as we have given them a name in chat.ejs (chatForm).*/

  if (chatForm) {
    chatForm.addEventListener('submit', function(e) {
      e.preventDefault(); /*prevent reloading the page ... to prevent that form from actually reloading the server. So I'm gonna do, and we get that variable called E from the event that gets detected by your browser. And we can say prevent the default behavior which would be to reload the page.*/
      socket.emit('postMessage',{
        username: chatUsername.value,
        message: chatMessage.value,
      });
      chatMessage.value='';
      chatMessage.focus(); /*Once the form is filled out, it'll get cleared and then it'll take people right back onto that message value.*/
    }); //chatform event

    socket.on('updateMessages', function(data) {
      showMessage(data);
    }); //updateMessages
  } //chatform
}); //socket

function showMessage(data) {
  var chatDisplay = document.querySelector('.chat-display');
  var newMessage = document.createElement('p');

  if (chatUsername.value == data.username) {
    newMessage.className = 'bg-success chat-text'; /*current user in chat/ color green*/
  } else {
    newMessage.className = 'bg-info text-warning chat-text'; /*the other user which has a blue color*/
  }

  newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
  chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);  /*So this is all DOM management. in order to put something before something else you need to do it on the parent of the element. So I can't just say put this message on this paragraph, or even on this panel, you have to say find the parent of that element and then insert it as the first element in there. */
}