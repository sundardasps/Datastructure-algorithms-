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
//---------------------------------------------------- Add first
  addFirst(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
//---------------------------------------------------- Add last
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
//---------------------------------------------------- Print
  print() {
    let m = this.head;
    while (m) {
      console.log(m.value);
      m = m.next;
    }
  }
//---------------------------------------------------- Delete
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
//---------------------------------------------------- Update Value
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
//---------------------------------------------------- Prime
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
//---------------------------------------------------- Middlevalue
  findMiddleNode() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(slow.value);
  }
//---------------------------------------------------- Sorting section
  mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    let mid = Math.floor(arr.length - 1 / 2);
    let left = arr.slice(0, mid);
    let rigth = arr.slice(mid);

    return this.merge(this.mergeSort(left), this.mergeSort(rigth));
  }
  merge(left, right) {
    let sorted = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
    return [...sorted, ...left, ...right];
  }

  sort() {
    let arr = [];
    let curr = this.head;
    let i = 0;
    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }

    let arr2 = this.mergeSort(arr);
    let mm = this.head;
    while (mm) {
      mm.value = arr2[i];
      i++;
      mm = mm.next;
    }
  }

  normalSort(){
    let temp = this.head
    while(temp){
      let temp2 = temp.next
      while(temp2){
         if(temp.value > temp2.value){
          let demmy = temp2.value
          temp2.value = temp.value
          temp.value = demmy
         }
          temp2 = temp2.next
      }
      temp = temp.next
    }
  }
}

let linked = new Linkedist();

linked.addlast(3);
linked.addlast(1);
linked.addlast(2);
linked.addlast(5);
linked.addlast(4);

linked.normalSort();
linked.print();
