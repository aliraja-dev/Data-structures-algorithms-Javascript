/**
 * Trie: A tree-like data structure that stores a set of strings.
 * Use case: books names, words, dictionaries, searching strings, etc.
 * At each level, nodes can branch off to make words and the ending character will have a boolean flag : isCompleted= true, to mark the end of a word.
 * Time Complexity:
 * search: O(w)
 * insert: O(w)
 * delete: O(w)
 * w: length of string
 * Space Complexity: O(n*m) n : number of words inserted, m : length of longest word.
 */

function Trie() {
    this.root = new TrieNode();
}

function TrieNode() {
    this.children = {};
    this.isCompleted = false;
}

Trie.prototype.insert = function (word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!current.children[char]) {
            current.children[char] = new TrieNode();
        }
        current = current.children[char];
    }
    current.isCompleted = true;
}

Trie.prototype.search = function (word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!current.children[char]) {
            return false;
        }
        current = current.children[char];
    }
    return current.isCompleted;
}

Trie.prototype.delete = function (word) {
    let current = this.root;
    let parent = null;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!current.children[char]) {
            return false;
        }
        parent = current;
        current = current.children[char];
    }
    if (current.isCompleted) {
        current.isCompleted = false;
    }
    if (Object.keys(current.children).length === 0) {
        delete parent.children[word[0]];
    }
}

const trie1 = new Trie();
trie1.insert('hello');
trie1.insert('hell');
trie1.insert('he');
trie1.insert('hel');
trie1.insert('helo');
trie1.insert('heloo');
console.log(trie1.search('helo'));
console.log("Contains hel", trie1.search('hel'));
console.log(trie1);
trie1.delete('hel');
console.log("searching for hel after deleting it", trie1.search('hel'));