class Node {
  constructor(value=null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  #head;

  constructor() {
    this.#head = null;
  }

  toString() {
    if (this.#head === null) {
      return 'null';
    }

    let node = this.#head;
    let string = '';
    while (node !== null) {
      string += `( ${node.value} ) -> `;
      node = node.nextNode;
    }

    return string + 'null';
  };

  append(value) {
    if (this.#head === null) {
      this.#head = new Node(value);
      return;
    }

    let node = this.#head;
    while(node.nextNode !== null) {
      node = node.nextNode;
    }

    node.nextNode = new Node(value);
  }

  prepend(value) {
    if (this.#head === null) {
      this.#head = new Node(value);
      return;
    }

    let newSecondNode = this.#head;
    let newFirstNode = new Node(value);

    newFirstNode.nextNode = newSecondNode;
    this.#head = newFirstNode;
  }

  size() {
    let counter = 0;
    let node = this.#head;

    while (node !== null) {
      counter += 1;
      node = node.nextNode;
    }

    return counter;
  }

  head() {
    return this.#head;
  }

  tail() {
    if (this.#head === null) {
      return null;
    }

    let node = this.#head;
    while (node.nextNode !== null) {
      node = node.nextNode;
    }

    return node;
  }
}

const list = new LinkedList();
list.append(69);
list.append(420);
list.append('bandit');
list.prepend('outlier');
console.log(list.toString());
console.log('Size: ' + list.size());
console.log(list.head());
console.log(list.tail());
