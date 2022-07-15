/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javscript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

function stringJson(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javscript-local-storage', todosJSON);
}

window.addEventListener('beforeunload', stringJson);
