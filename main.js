class LinkedList {
  constructor() {
    let head = null;

    class Node {
      constructor(value=null) {
        this.value = value;
        this.nextNode = null;
      }
    }

    this.toString = function() {
      if (head === null) {
        return 'null';
      }

      let node = head;
      let string = '';
      while (node !== null) {
        string += `( ${node.value} ) -> `;
        node = node.nextNode;
      }

      return string + 'null';
    };

    this.append = function(value) {
      if (head === null) {
        head = new Node(value);
        return;
      }

      let node = head;
      while(node.nextNode !== null) {
        node = node.nextNode;
      }

      node.nextNode = new Node(value);
    }

    this.prepend = function(value) {
      if (head === null) {
        head = new Node(value);
        return;
      }

      let newSecondNode = head;
      let newFirstNode = new Node(value);

      newFirstNode.nextNode = newSecondNode;
      head = newFirstNode;
    }
  }
}

const list = new LinkedList();
list.append(69);
list.append(420);
list.prepend('outlier');
console.log(list.toString());
