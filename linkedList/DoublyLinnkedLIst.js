class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLink {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(value) {
        const temp = new Node(value);
        if (this.=head === null) {
            this.head = temp;
            this.tail = temp;
        } else {
            this.head.next = temp;
            temp.prev = this.head;
            this.head = temp;
 
        }
    }

    display() {
        let curr = this.tail;
        while (curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

const node = new DoubleLink();

node.addNode(10);
node.addNode(20);
node.addNode(30);
node.addNode(40);
node.addNode(50);

node.display();
