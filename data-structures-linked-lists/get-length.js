/* exported getLength */

function getLength(list) {
  let counter = 0;
  let head = list;
  while (head !== null) {
    counter++;
    head = head.next;
  }
  return counter;
}
