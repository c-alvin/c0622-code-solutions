/* exported takeSmaller */

function takeSmaller(queue) {
  const firstValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstValue;
  }
  const secondValue = queue.dequeue();
  if (firstValue < secondValue) {
    queue.enqueue(secondValue);
    return firstValue;
  } else {
    queue.enqueue(firstValue);
    return secondValue;
  }

}
