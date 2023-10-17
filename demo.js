function a1(a){
    return function b1(b){
         return function c1(c){
             console.log(a+b+c)
         }
    }
}

let sum = a1(10)(20)(30)

console.log(sum)