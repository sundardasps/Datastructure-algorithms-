let m = [2, 3, 2, 1, 5, 6, 8, 6, 4, 3, 2];

function insertionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort(m));
