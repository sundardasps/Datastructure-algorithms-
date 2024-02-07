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
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    reverse() {
        let current = this.head;
        while (current !== null) {
            // Swap next and prev pointers
            let temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            // Move to the next node
            current = temp;
        }
        // Swap head and tail after reversing
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    display() {
        let curr = this.head;
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

node.reverse()

node.display();
