class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = node;
            break;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = node;
            break;
          }
          current = current.right;
        }
      }
    }
  }

  
  has(data) {
    let current = this.head;
    while (current !== null) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  

  find(data) {
    let current = this.head;
    while (current !== null) {
      if (data === current.data) {
        return current;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(data) {
    this.head = this._removeNode(data, this.head);
  }

  _removeNode(data, current) {
    if (current === null) {
      return null;
    }
    if (data === current.data) {
      if (current.left === null && current.right === null) {
        return null;
      }
      if (current.left === null) {
        return current.right;
      }
      if (current.right === null) {
        return current.left;
      }
      let tempNode = current.right;
      while (tempNode.left !== null) {
        tempNode = tempNode.left;
      }
      current.data = tempNode.data;
      current.right = this._removeNode(tempNode.data, current.right);
      return current;
    } else if (data < current.data) {
      current.left = this._removeNode(data, current.left);
      return current;
    } else {
      current.right = this._removeNode(data, current.right);
      return current;
    }
  }

  min() {
    if (this.head === null) {
      return null;
    }
    let current = this.head;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }


  max() {
    if (this.head === null) {
      return null;
    }
    let current = this.head;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};