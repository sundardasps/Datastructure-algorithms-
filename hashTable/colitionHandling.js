class Colition{

   constructor(size){
    this.table = new Array(size)
    this.size = size
   }

   hash(key){
    
    let total = 0
    for(let i=0;i<key.length;i++){
        total += key.charCodeAt(i)
    }
        return total % this.size
   }
 
      add(key,value){
         let hashed = this.hash(key)
         const bucket = this.table[hashed]
         if(!bucket){
            this.table[hashed] = [[key,value]]
         }else{
             const samekey = bucket.find(existkey=>existkey[0] === key)
             if(samekey){
                 samekey[1] = value
             }else{
                 bucket.push([key,value])
             }
         }
      }
      
      get(key){
        const hasshed = this.hash(key)
        const bucket = this.table[hasshed]
        if(bucket){
            const sameKey = bucket.find(value=>value[0] === key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return "data not found"
      }

      disply(){

        for(let i =0;i<this.table.length;i++){
            const bucket = this.table[i]
             if(bucket){
                console.log(i,bucket)
             }
        }
      }

      update(key,value){
        let hashed = this.hash(key)
        let bucket = this.table[hashed]
        if(bucket){
            const sameKey = bucket.find(value => value[0] === key)
            if(sameKey){
                sameKey[1] = value
                return "updated"
            }
        }
        return "Data not found at this key"
      }

      delete(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKey = bucket.find(value=>value[0] === key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
            }
        }
      }
}

const hash = new Colition(10)

hash.add("mmm","hi iam a mern stack developer")
hash.add("rrr","hi iam a mern stack developer")
hash.add("fff","hi iam a mern stack developer")
hash.add("ggg","hi iam a mern stack developer")


console.log(hash.delete("mmm"))
hash.disply()