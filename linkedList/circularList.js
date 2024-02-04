class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class circularLiked {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next !== null && curr.next !== this.head) {
        curr = curr.next;
      }
      curr.next = node;
    }
    node.next = this.head;
  }

  display() {
    let curr = this.head;
    do {
      console.log(curr);
      curr = curr.next;
    } while (curr !== this.head);
  }
}

const nn = new circularLiked();

nn.append(1);
nn.append(2);
nn.append(3);
nn.append(4);
nn.append(5);
nn.append(6);

nn.display();
