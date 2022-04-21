/**
 * QUEUES - FIFO Principle
 * They are similar to queues IRL such as line at a grocery store. People are only added to the end of the queue and removed from the front of the queue. Similarly, Enqueue and Dequeue methods add to the back / tail of the queue and remove from the front / head of the queue.
 * Enqueue: O(1)
 * Dequeue: O(1)
 * Peek: O(1)
 * isEmpty: O(1)
 * size: O(1)
 * Contains: O(n)
 */

function Queue(array) {
    //* short circuit OR if array is passed in otherwise create an empty array
    this.array = array || [];
}

Queue.prototype.enqueue = function (element) {
    //* add to the tail of Queue
    this.array.push(element);
}
Queue.prototype.dequeue = function () {
    //* remove from the head of Queue
    return this.array.shift();
}

Queue.prototype.peek = function () {
    //* return the element at the head of the Queue
    return this.array[0];
}

Queue.prototype.contains = function (element) {
    //* returns false if element is not found in the queue & true otherwise
    return this.array.indexOf(element) !== -1;
}
Queue.prototype.isEmpty = function () {
    //* returns true if the queue is empty and false otherwise
    return this.array.length === 0;
}

Queue.prototype.size = function () {
    //* returns the size of the queue
    return this.array.length;
}

const ourQueue = new Queue();
ourQueue.enqueue(1);
ourQueue.enqueue(2);
ourQueue.enqueue(3);
ourQueue.enqueue(4);
console.log("Element at the Head of the Queue (FIFO) is", ourQueue.peek());
ourQueue.dequeue();
console.log("Our Queue contains 2: ", ourQueue.contains(2))