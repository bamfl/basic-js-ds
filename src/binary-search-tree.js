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
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    if (!this.treeRoot) {
      this.treeRoot = new Node(data);
    } else {
      let node = this.treeRoot;

      while (node) {
        if (data === node.data) {
          break;
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          }

          node = node.right;
        } else {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          }

          node = node.left;
        }
      }
    }
  }

  has(data) {
    let node = this.treeRoot;

    while (node) {
      if (data === node.data) {
        return true;
      } else if (data < node.data) {
				node = node.left;
			} else if (data > node.data) {
				node = node.right;
			}
    }

		return false;
  }

  find(data) {
		let node = this.treeRoot;

    while (node) {
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
				node = node.left;
			} else if (data > node.data) {
				node = node.right;
			}
    }

		return null;
	}

  remove(data) {}

  min() {
    if (!this.treeRoot) {
      return null;
    }

    let node = this.treeRoot;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.treeRoot) {
      return null;
    }

    let node = this.treeRoot;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
};

// const tree = new BinarySearchTree();

// // tree.add(10);
// // tree.add(11);
// // tree.add(9);
// // tree.add(10);

// console.log(tree.root());
