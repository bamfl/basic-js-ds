const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.root;
  }

  enqueue(value) {
    if (this.size === 0) {
      this.root = new ListNode(value);
    } else {
      let node = this.root;

      while (node.next) {
        node = node.next;
      }

      node.next = new ListNode(value);
    }

    this.size++;
  }

  dequeue() {
    if (this.root) {
      let value = this.root.value;

      this.root = this.root.next;
      this.size--;

      return value;
    }
  }
};
