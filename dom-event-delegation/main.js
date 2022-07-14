var $taskList = document.querySelector('.task-list');

function logEvent(event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target && event.target.nodeName === 'BUTTON') {
    var closest = event.target.closest('.task-list-item');
    console.log('closest task-list-item:', closest);
    closest.remove();
  }
}

$taskList.addEventListener('click', logEvent);
