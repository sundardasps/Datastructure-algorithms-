class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addNode(head, value) {
  let cur = new Node(value);
  cur.next = head;
  return cur;
}

function merge(h1,h2) {
  if (h1 == null) return h2;
  if (h2 == null) return h1;

  if (h1.value < h2.value) {
    h1.next = merge(h1.next, h2);
    return h1;
  } else {
    h2.next = merge(h1, h2.next);
    return h2;
  }
}

function print(head){
  while (head) {
    console.log(head.value);
    head = head.next;
  }
}

let head1 = addNode(null, 4);
head1 = addNode(head1, 3);
head1 = addNode(head1, 2);
head1 = addNode(head1, 1);

let head2 = addNode(null, 5);
head2 = addNode(head2, 8);
head2 = addNode(head2, 7);
head2 = addNode(head2, 6);

let mm = merge(head1, head2);

print(mm);