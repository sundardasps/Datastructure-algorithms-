function heapify(arr, length, parentIndex) {
  let largest = parentIndex;
  let left = parentIndex * 2 + 1;
  let rigth = left + 1;

  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  if (rigth < length && arr[rigth] > arr[largest]) {
    largest = rigth;
  }

  if (largest !== parentIndex) {
    [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];
    heapify(arr, length, largest);
  }
  return arr;
}

function heap(arr) {
  let length = arr.length;
  let lastParentNode = Math.floor(length / 2 - 1);
  let lastChild = length - 1;

  while (lastParentNode >= 0) {
    heapify(arr, length, lastParentNode);
    lastParentNode--;
  }

  while (lastChild >= 0) {
    [arr[0], arr[lastChild]] = [arr[lastChild], arr[0]];
    heapify(arr, lastChild, 0);
    lastChild--;
  }

  return arr;
}

console.log(heap([6,2,4,1,9,5,3,0,7,8,10]));
