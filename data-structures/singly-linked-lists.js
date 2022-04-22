/**
 * Linked List: A data structure that consists of a collection of nodes, where each node contains a piece of data and a reference to the next or previous node in the list for singly and doubly linked lists respectively.
 * In languages such as C/C++ with static arrays, the size and capacity of the array is fixed at compile time and can not be changed at run time. This led to the creation of linked lists where the size and capacity of the list is not known at compile time. And the list can grow and shrink dynamically.
 * Arrays in JS are not primitives, instead, objects with common properties and methods. They are dynamic and can hold multiple types of data unlike in C/C++. When its undesirable use typed arrays instead.
 * For more information: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * 
 * ! Singly Linked List
 * Time Complexity:
 * 
 */

//* Creating a linked list Node: needs data and next property

function Node(data) {
    this.data = data;
    this.next = null;
}
function LinkedList() {
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.isEmpty = function () {
    // returns true if the length of the Linked list is zero
    return this.length === 0;
}

//* inserts a new node at the beginning of the Linked list and moves the head pointer to the new node & returns it
LinkedList.prototype.insert = function (data) {
    if (this.head === null) {
        this.head = new Node(data);
    } else {
        const temp = new Node(data);
        temp.next = this.head;
        this.head = temp;
    }
    this.length++;
    return this.head;
}

//* delete by value
LinkedList.prototype.delete = function (data) {
    //* check at Head of the list
    if (this.head.data === data) {
        this.head = this.head.next;
        this.length--;
        return this.head;
    }
    //* check at any other position
    let current = this.head;
    let previous = null;
    while (current.next !== null) {
        if (current.data === data) {
            previous.next = current.next;
            this.length--;
            return this.current;
        }

        previous = current;
        current = current.next;

    }
    //* checking at tail of the list
    if (current.data === data) {
        previous.next = null;
        this.length--;
        return this.current;
    }
    return false;
}





const list1 = new LinkedList();

console.log("Inserting 1", list1.insert(1));
console.log("Inserting 2", list1.insert(2));
console.log("Inserting 3", list1.insert(3));
console.log("Delete 3", list1.delete(3))
console.log("entire list", list1);
console.log("Head of the list is", list1.head);