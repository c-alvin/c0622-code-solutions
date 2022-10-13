/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list;
  }
  const swap = list.next.data;
  list.next.data = list.data;
  list.data = swap;
  return list;
}
