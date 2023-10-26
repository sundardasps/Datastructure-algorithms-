class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedist {
  constructor() {
    this.head = null;
  }

  addFirst(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  addlast(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let m = this.head;
      while (m.next) {
        m = m.next;
      }
      m.next = node;
    }
  }

  print() {
    let m = this.head;
    while (m) {
      console.log(m.value);
      m = m.next;
    }
  }

  delete(value) {
    let m = this.head;
    while (m.next) {
      if (m.next.value === value) {
        break;
      }
      m = m.next;
    }
    m.next = m.next.next;
  }

  addData(value, olddata) {
    let node = new Node(value);
    let m = this.head;
    while (m.next) {
      if (m.value === olddata) {
        break;
      }
      m = m.next;
    }
    node.next = m.next;
    m.next = node;
  }



  prime() {
    let m = this.head;
    while (m) {
     
      let count = 0;
      for (let j = 2; j < m.value; j++) {
        if (m.value % j == 0) {
          count++;
          break;
        }
      }
      if (count === 1) {
        console.log(m.value);
      }
      m = m.next;
    }
  }

  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(slow.value);
  }
  
}

let linked = new Linkedist();

linked.addlast(1);
linked.addlast(2);
linked.addlast(3);
linked.addlast(4);
linked.addlast(5);

linked.prime();
