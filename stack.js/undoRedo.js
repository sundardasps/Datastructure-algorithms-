class Undo{

    constructor(){
        this.a = []
        this.b = []
 
    }

    add(value){
        this.a.push(value)
    }

    undo(){
        this.b.push(this.a.pop())
    }
    redo(){
        if(this.b.length === 0)return null
        this.a.push(this.b.pop())
    }

    show(){
        for(let i = 0 ;i<this.a.length;i++){
            console.log(this.a[i])
        }
    }
}

const nmn = new Undo()

nmn.add(10)
nmn.add(20)
nmn.add(30)
nmn.add(40)
nmn.undo()
nmn.redo()


nmn.show()
