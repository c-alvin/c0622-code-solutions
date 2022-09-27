/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let counter = 0;
  if (queue.peek() === undefined) {
    return;
  }
  while (counter < index) {
    const value = queue.dequeue();
    queue.enqueue(value);
    counter++;
  }
  const indexValue = queue.dequeue();
  return indexValue;
}
