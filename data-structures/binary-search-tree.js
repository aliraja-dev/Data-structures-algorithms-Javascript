/**
 * Binary Search Tree
 * Two children for each node : left and right
 * Left child is always less than  and the right child is always greater than parent.
 * Balanced BST means the height is minimized by having children on both sides of it. This is important, otherwise the time complexity for search, insertion and deletion will be O(n).
 * Time complexity:
 * search: O(log n)
 * insert: O(log n)
 * delete: O(log n)
 * height: O(log n) -- Perfect balanced tree
 * height: O(n) -- Unbalanced tree - worst case
 */

function BST() {
    this._root = null;
}
//! insertion 

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function (value) {
    const newNode = new Node(value);
    if (this._root === null) {
        // if the tree is empty, make the new node the root
        this._root = newNode;
    } else {
        // start at the root
        let current = this._root;
        while (true) {
            // if the new value is less than the current value
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }

                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}

BST.prototype.contains = function (value) {
    if (this._root === null) {
        return false;
    } else {
        let current = this._root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) {
            return false;
        }
        return true;
    }
}

BST.prototype.remove = function (value) {
    if (!this._root) {
        return false;
    }
    let currentNode = this._root;
    let parentNode = null;
    while (currentNode) {
        if (value < currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.left;
        } else if (value > currentNode.value) {
            parentNode = currentNode;
            currentNode = currentNode.right;
        } else {
            // we have a match, get to work!

            // this is a simple case for now
            // if current node doesnt have a left child, then you can just set current nodes right child to the right child of the current node
            if (currentNode.left === null) {
                if (parentNode === null) {
                    this._root = currentNode.right;
                } else {
                    // if parent is not null, then you set the parent node to the current nodes right child
                    if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.right;
                    } else if (currentNode.value > parentNode.value) {
                        parentNode.right = currentNode.right;
                    }
                }

                return true;
            } else if (currentNode.right === null) {
                if (parentNode === null) {
                    this._root = currentNode.left;
                } else {
                    if (currentNode.value < parentNode.value) {
                        parentNode.left = currentNode.left;
                    } else if (currentNode.value > parentNode.value) {
                        parentNode.right = currentNode.left;
                    }
                }
                return true;
            }

            // if current node has both left and right child, you find the minimum value in the right subtree
            // and replace the value of the current node with that minimum value
            let leftmost = currentNode.right;
            let leftmostParent = currentNode;
            while (leftmost.left !== null) {
                leftmostParent = leftmost;
                leftmost = leftmost.left;
            }

            // swap the values
            let temp = currentNode.value;
            currentNode.value = leftmost.value;
            leftmost.value = temp;

        }
    }
}

BST.prototype.search = function (value) {
    if (this._root === null) {
        return false;
    } else {
        let current = this._root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) {
            return false;
        }
        return true;
    }
}

const bst1 = new BST();
bst1.insert(10);
bst1.insert(5);
bst1.insert(15);
bst1.insert(2);
bst1.insert(7);
bst1.insert(12);
bst1.insert(17);
bst1.insert(1);

console.log(bst1);
console.log("contains 10: ", bst1.contains(10));
console.log("contains 15: ", bst1.contains(15));
console.log("remove 10: ", bst1.remove(10));
console.log("contains 10: ", bst1.contains(10));
