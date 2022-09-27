/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }

  const frontValue = queue.dequeue();
  queue.enqueue(frontValue);
}
