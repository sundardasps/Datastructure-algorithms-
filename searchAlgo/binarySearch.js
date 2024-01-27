function binary(arr, tar) {
    let low = 0;
    let high = arr.length - 1;
  
    for (let i = 0; i <low + high; i++) {
      let mid = Math.floor(low + high) / 2;
      if (arr[mid] === tar) {
        console.log(tar)
        return mid;
      } else if (arr[mid] < tar) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1
  }
  let m = [1, 2, 3, 4, 5, 6, 7];
  let n = binary(m, 7);
  console.log(n)