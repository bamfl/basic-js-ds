const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
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
      let newNode = new Node(data);

      while (node) {
        if (data > node) {
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

      if (data > node.value) {
        node.right = newNode;
      } else {
        node.left = newNode;
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
};
