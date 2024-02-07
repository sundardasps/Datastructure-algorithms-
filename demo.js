function insertion(arr){
 for(let i=0;i<arr.length;i++){
    let key = arr[i]
    let j = i -1
    while(j>=0 && arr[j] > key){
        arr[j+1] = arr[j]
        j = j -1
    }
    arr[j+1] = key
 }
return arr
}

let m = [2,1,3,6,4,8,0,6]

console.log(insertion(m));