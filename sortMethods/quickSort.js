function quickSort(arr){

    if(arr.length< 2){
         return arr
    }

    let pivot = arr[arr.length-1]
    let left =[]
    let right = []

    for(i=0;i<arr.length-1;i++){
         if(arr[i]<pivot){
             left.push(arr[i])
         }else{
            right.push(arr[i])
         }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let arr = [2,1,4,3,8,9,7,0]

console.log(quickSort(arr));