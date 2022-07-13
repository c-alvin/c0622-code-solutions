var $contact = document.querySelector('#contact-form');

function callBack(event) {
  event.preventDefault();
  var obj = {};
  obj.name = $contact.elements.name.value;
  obj.email = $contact.elements.email.value;
  obj.message = $contact.elements.message.value;
  console.log(obj);
  $contact.reset();
}

$contact.addEventListener('submit', callBack);
