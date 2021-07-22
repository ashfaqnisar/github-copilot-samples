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
  
// make a api call to the github api to fetch the details of the user using the username
function getUserDetails(username) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users/' + username);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var user = JSON.parse(xhr.responseText);
        console.log(user);
      } else {
        console.log('Error: ' + xhr.status);
      }
    }
  };
  xhr.send();
}

console.log(getUserDetails("ashfaqnisar"))  

// Add two numbers
function add(a, b) {
  return a + b;
}

// find a element in a list
function findElement(arr, element) {
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

// find a element in a list using merge sort
function findElement(arr, element) {
  var sorted = mergeSort(arr);
  var index = sorted.indexOf(element);
  return index === sorted.length - 1 ? -1 : index;
}



// create a double linked list
function createDoubleLinkedList(head) {
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

// create a palindrome function
function isPalindrome(str) {
  var reversed = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

// logistic regression
function logisticRegression(x, y, alpha, iterations) {
  var theta = [0, 0];
  for (var i = 0; i < iterations; i++) {
    var z = theta[0] + theta[1] * x;
    var h = 1 / (1 + Math.exp(-z));
    var gradient = [x * (h - y), h * (1 - h) * x];
    theta[0] -= alpha * gradient[0];
    theta[1] -= alpha * gradient[1];
  }
  return theta;
}

// linear regression
function linearRegression(x, y, alpha, iterations) {
  var theta = [0, 0];
  for (var i = 0; i < iterations; i++) {
    var z = theta[0] + theta[1] * x;
    var h = z;
    var gradient = [x * (h - y), h * (1 - h) * x];
    theta[0] -= alpha * gradient[0];
    theta[1] -= alpha * gradient[1];
  }
  return theta;
}


// create a function to find the maximum value in a list
function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// create a function to calculate the mean of a list
function mean(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// create a function to find median of two sorted lists
function findMedian(arr1, arr2) {
  var len = arr1.length;
  var mid = Math.floor(len / 2);
  if (len % 2 === 0) {
    return (arr1[mid] + arr2[mid]) / 2;
  } else {
    return arr1[mid];
  }
}
