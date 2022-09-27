/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let firstValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstValue;
  }
  while (firstValue >= queue.peek()) {
    queue.enqueue(firstValue);
    firstValue = queue.dequeue();
  }

  return firstValue;
}
