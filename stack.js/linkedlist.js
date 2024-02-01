class Node{

    constructor(value){
         this.value = value
         this.next = null
    }
}

class Stack{
    constructor(){
       this.top = null
       this.length = 0
    }

    add(value){
        const node = new Node(value)
        if(!this.top){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
            this.length++
        }
    }

    pop(){
      let popingvalue = this.top
      this.top = this.top.next
      this.length--
  }

  disply(){
    let curr = this.top
    while(curr){
        console.log(curr.value)
        curr=curr.next
    }
  }

}

const mm = new Stack()

mm.add(1)
mm.add(2)
mm.add(3)
mm.add(4)
mm.add(5)
mm.add(6)
mm.pop()


mm.disply()