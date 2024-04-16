class LinkedList {
  constructor() {
    this.nextNode = null;

    class Node {
      constructor(value=null) {
        this.value = value;
        this.nextNode = null;
      }
    }

    this.toString = function() {
      if (this.nextNode === null) {
        return 'head -> null';
      }

      let node = this.nextNode;
      let string = 'head -> null';
      while (node !== null) {
        string += `( ${node.value} ) -> `;
        node = node.nextNode;
      }

      return string + 'null';
    };
  }
}

const list = new LinkedList();

console.log(list.toString());
