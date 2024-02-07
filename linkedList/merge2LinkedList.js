class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addNode(head, value) {
  let node = new Node(value);
  node.next = head;
  return node;
}

function mergeSortedLists(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  let mergedList;

  if (l1.value < l2.value) {
    mergedList = l1;
    mergedList.next = mergeSortedLists(l1.next, l2);
  } else {
    mergedList = l2;
    mergedList.next = mergeSortedLists(l1, l2.next);
  }

  return mergedList;

}

function sort(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let left = head;
  let right = slow.next;
  slow.next = null;

  left = sort(left);
  right = sort(right)

  return mergeSortedLists(left, right);
}

function print(head) {
  while (head) {
    console.log(head.value);
    head = head.next;
  }
}

let head1 = addNode(null, 2);
head1 = addNode(head1, 5);
head1 = addNode(head1, 6);
head1 = addNode(head1, 3);
head1 = addNode(head1, 4);
head1 = addNode(head1, 1);

let head2 = addNode(null, 8);
head2 = addNode(head2, 6);
head2 = addNode(head2, 7);
head2 = addNode(head2, 10);
head2 = addNode(head2, 9);

let mergedAndSorted = sort(mergeSortedLists(head1, head2));

print(mergedAndSorted);
