/**
 * STACKS - LIFO Principle
 * Head of the stack is the top of the stack and in this case the last element added to the stack.
 * Time complexity: O(1) - As the last element is always at the top of the stack.
 * Peek: O(1)
 * isEmpty: O(1)
 * push: O(1)
 * pop: O(1)
 * size: O(1)
 * Access: O(n)
 * Search: O(n)
 */

// Stack implementation using Constructor Function and assigning methods for common operations on a stack to its prototype.
function Stack(array) {
    // short circuit if array is passed in otherwise create an empty array
    this.array = array || [];
}

Stack.prototype.peek = function () {
    return this.array[this.array.length - 1];
}

Stack.prototype.isEmpty = function () {
    return this.array.length === 0;
}

Stack.prototype.push = function (element) {
    this.array.push(element);
}

Stack.prototype.pop = function () {
    return this.array.pop();
}

Stack.prototype.size = function () {
    return this.array.length;
}

Stack.prototype.contains = function (element) {
    // returns false if element is not found in the stack & true otherwise
    return this.array.indexOf(element) !== -1;
}

//TODO Search & Access methods

const stack1 = new Stack();
stack1.push(1);
console.log(stack1.peek());
console.log("Is the stack empty", stack1.isEmpty());
console.log(stack1.size());
stack1.push(2);
stack1.push(3);
console.log("Element at Top of the stack", stack1.peek());
console.log("The stack contains 3: ", stack1.contains(3));