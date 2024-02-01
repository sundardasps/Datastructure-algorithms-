class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class  Queuelist{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value){
        const node = new Node(value)
        if(!this.front){
        this.front = node
        this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }

    dequeue(){
        let removeNode = this.front 
        this.front = removeNode.next
        return removeNode.value
    }

    display(){
        let curr = this.front
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }

    }
    peek(){
        return this.front?this.front.value:null
    }
}

const mm =new Queuelist()

mm.enqueue(1)
mm.enqueue(2)
mm.enqueue(3)
mm.dequeue()
mm.peek()




