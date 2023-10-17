function lineear(arr, value) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      return i;
    }
  }
  return -1;
}
console.log(lineear([1, 2, 3, 4, 5], 5));
