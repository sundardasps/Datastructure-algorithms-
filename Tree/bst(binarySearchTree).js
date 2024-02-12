class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
  }
}

class bst {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.rigth === null) {
        root.rigth = node;
      } else {
        this.insertNode(root.rigth, node);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.rigth);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.rigth);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.rigth);
      console.log(root.value);
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.rigth) {
      return root.value;
    } else {
      return this.min(root.rigth);
    }
  }
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.rigth) {
        queue.push(curr.rigth);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }

    if (value === root.value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.rigth, value);
    }
  }
  isBst() {
    return this.validateBst(this.root, -Infinity, Infinity);
  }

  validateBst(root, min, max) {
    if (!root) {
      return false;
    }

    if (root.value <= min || root.value >= max) {
      return false;
    }

    return (
      this.validateBst(root.left, min, root.value) &&
      this.validateBst(root.rigth, root.value, max)
    );
  }
  delete(value) {
    this.root = this.deleteVlue(this.root, value);
  }
  deleteVlue(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteVlue(this.left, value);
    } else if (value > root.value) {
      root.rigth = this.deleteVlue(this.rigth, value);
    } else {
      if (!root.left && !root.rigth) {
        return null;
      }
      if (!root.left) {
        return root.rigth;
      }
      if (!root.rigth) {
        return root.left;
      }
      root.value = this.min(root.rigth);
      root.rigth = this.deleteVlue(root.rigth, root.value);
    }
    return root;
  }
}

const b = new bst();
b.insert(10);
b.insert(7);
b.insert(3);
b.insert(13);

b.delete(3);

console.log(b.inOrder(b.root));
