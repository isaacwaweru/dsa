class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const tmp = this.head;

    this.head = tmp.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return tmp;
  }

  unshift(val) {
    // 1.) New Node
    const newNode = new Node(val);

    // 2.) If no head, set head/tail to new Node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // 3.) Set new Node next property to current head
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  // Get node at index
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  // Set node value
  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const pre = this.get(index - 1);
    const tmp = (pre.next = newNode);
    pre.next = newNode;
    newNode.next = tmp;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    const removedNode = this.get(index);

    if (index === 0) {
      this.shift(index);
      return removedNode.val;
    }

    if (index === this.length - 1) {
      this.pop(index);
      return removedNode.val;
    }

    const pre = this.get(index - 1);
    pre.next = removedNode.next;
    this.length--;

    return removedNode.val;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("GOODBYE");
// list.push("SEEYOH");
// list.push("KESHO");

// console.log(list.pop());

// console.log(list.shift());

// console.log(list.unshift("WELCOME"));

// console.log(list.get(4));

// console.log(list.set(1, "GOODMORNING"));

// console.log(list.insert(0, "WELCOME"));

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);

list.print();

list.reverse();

list.print();
