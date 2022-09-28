/* exported removeTail */

function removeTail(list) {
  if (!list.next) {
    return;
  }
  var secondToLast = list;
  while (secondToLast.next.next !== null) {
    secondToLast = secondToLast.next;
  }
  secondToLast.next = null;
}
