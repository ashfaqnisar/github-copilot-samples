// create an function to find the value using merge sort
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
  
  //find the second largest value in a list
  function findSecondLargest(arr) {
    var sorted = mergeSort(arr);
    return sorted[sorted.length - 2];
  }
  
  //find an element in a list using merge sort
  function findElement(arr, element) {
    var sorted = mergeSort(arr);
    var index = sorted.indexOf(element);
    return index === sorted.length - 1 ? -1 : index;
  }
  
  // find the element in a list using binary search
  function findElementBinary(arr, element) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
      var mid = Math.floor((low + high) / 2);
      if (arr[mid] === element) {
        return mid;
      } else if (arr[mid] > element) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  }
  
  // create reverse linked list
  function reverseLinkedList(head) {
    var current = head;
    var prev = null;
    while (current) {
      var next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
  
  // create a function to allocate memory using round robin algorithm
  function roundRobinAllocation(arr, n) {
    var i = 0;
    var j = 0;
    var current = null;
    var next = null;
    var temp = null;
    for (i = 0; i < n; i++) {
      current = arr[i];
      next = arr[i + 1];
      temp = current;
      current.next = next;
    }
    return temp;
  }
  
  // create a function 
  