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

  at(index) {
    if (
      this.#head === null ||
      typeof index !== 'number' ||
      index < 0
    ) {
      return this.#head;
    }

    let counter = 0;
    let node = this.#head;

    while(node.nextNode !== null) {
      if (index === counter) break;

      counter += 1;
      node = node.nextNode;
    }

    return (counter === index) ? node : null;
  }

  pop() {
    if (this.#head === null) return;
    else if (this.#head.nextNode === null) {
      this.#head = null;
      return;
    }

    let node = this.#head;

    while (node.nextNode.nextNode !== null) {
      node = node.nextNode;
    }

    node.nextNode = null;
  }

  contains(value) {
    let node = this.#head;

    while (node !== null) {
      if (node.value === value) return true;

      node = node.nextNode;
    }

    return false;
  }

  find(value) {
    if (this.#head === null) {
      return null;
    }

    let counter = 0;
    let node = this.#head;

    while (node !== null) {
      if (node.value === value) return counter;

      counter += 1;
      node = node.nextNode;
    }

    return null;
  }
}

const list = new LinkedList();
list.append(69);
list.append(420);
list.append('bandit');

list.prepend('outlier');

list.append('removed');
list.pop();

console.log(list.toString());
console.log('Size: ' + list.size());

console.log(list.head().value);
console.log(list.tail().value);

console.log(list.at(3).value);

console.log(list.contains(69));
console.log(list.contains('bandit'));
console.log(list.contains(1));

console.log(list.find(69));
console.log(list.find('bandit'));
console.log(list.find(1));
