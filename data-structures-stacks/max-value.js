/* exported maxValue */

function maxValue(stack) {
  let largestNumber = -Infinity;
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  while (stack.peek() !== undefined) {
    if (stack.peek() > largestNumber) {
      largestNumber = stack.peek();
    }
    stack.pop();
  }
  return largestNumber;
}
