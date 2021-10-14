const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinarySearchTree {
// class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    if (!this.root) {
      this.root = new Node(data);
    } else {
      let node = this.root;

      while (node) {
				if (data === node.data) {
					break;
				} else if (data > node.data) {
					if (!node.right) {
						break;
					}
          node = node.right;
        } else {
					if (!node.left) {
						break;
					}
          node = node.left;
        }
      }

      if (data > node.data) {
        node.right = new Node(data);
      } else {
        node.left = new Node(data);
      }
    }
  }

  has(data) {
    let node = this.root;

    while (node) {
      if (data > node) {
        if (!node.right) {
          return false;
        }
        return true;
      } else {
        if (!node.left) {
          return false;
        }
        return true;
      }
    }
  }

  find(data) {
    let node = this.root;

    while (node) {
      if (data > node) {
        if (!node.right) {
          return node.right;
        }
        return true;
      } else {
        if (!node.left) {
          return null;
        }
        return node.left;
      }
    }
  }

  remove(data) {
    return true;
  }

  min() {
    if (!this.root) {
      return null;
    }

    let node = this.root;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.root) {
      return null;
    }

    let node = this.root;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

// const tree = new BinarySearchTree();

// tree.add(10);
// tree.add(12);
// tree.add(1);
// tree.add(1);
// tree.add(15);

// console.log(tree);
