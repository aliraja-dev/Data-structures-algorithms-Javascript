/**
 * Linked List: A data structure that consists of a collection of nodes, where each node contains a piece of data and a reference to the next or previous node in the list for singly and doubly linked lists respectively.
 * In Doubly Linked List, the next and previous pointers are also used to link the nodes together unlike in singly linked list where only the next pointer is used.
 * 
 * ! Doubly Linked List
 * Time Complexity:
 * search: O(n)
 * delete: O(n)
 * insert: O(1) at either head or tail
 */

function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}
function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

//* isEmpty method
DoublyLinkedList.prototype.isEmpty = function () {
    // returns true if the length of the Doubly Linked list is zero
    return this.length === 0;
}

//* Insert at head of the Doubly Linked List

DoublyLinkedList.prototype.insertAtHead = function (data) {
    if (this.head == null) {
        this.head = new Node(data);
        this.tail = this.head;
    } else {
        const temp = new Node(data);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }
    this.length++;
    return this.head;
}

DoublyLinkedList.prototype.insertAtTail = function (data) {
    if (this.tail == null) {
        this.tail = new Node(data);
        this.head = this.tail;
    } else {
        const temp = new Node(data);
        temp.prev = this.tail;
        this.tail.next = temp;
        this.tail = temp;
    }
    this.length++;
    return this.tail;
}

DoublyLinkedList.prototype.deleteAtHead = function () {

}