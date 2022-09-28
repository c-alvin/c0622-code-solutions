/* exported getTail */

function getTail(list) {

  let tail = list;
  if (tail.next === null) {
    return tail.data;
  }

  while (tail.next !== null) {

    tail = tail.next;

  }

  return tail.data;
}
