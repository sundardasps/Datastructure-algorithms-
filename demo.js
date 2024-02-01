class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  addfirst(value) {
    const node = new Node(value);
    if (!this.head) {
