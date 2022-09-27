/* exported take2nd */

function take2nd(queue) {
  const firstValue = queue.dequeue();
  if (queue.peek() === undefined) {
    return firstValue;
  }
  queue.enqueue(firstValue);
  const secondValue = queue.peek();
  queue.dequeue();
  return secondValue;
}
