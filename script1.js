//programs using anonymous function
// Print odd numbers in an array using anonymous function
var arr = [1,2,3,4,5,6,7,8,9];
var temp = [];
var result = function (arr){
    for(var i=0;i<arr.length;i++){
      if(arr[i]%2 !==0){
        temp.push(arr[i]);
        }
      }
      return temp;
  }
  console.log(result(arr));


//  Convert all the strings to title caps in a string array
var str = "javascript";
var res = function (str) {
    var temp = [];
    var arr = str.split("");

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase()) {
            temp.push(arr[i].toUpperCase());
        }
    }
    return temp;
}
console.log(res(str));


//Sum of all numbers in an array
var arr=[1,2,3,4,5,6,7,8,9,10];
var sum = 0;
var res = function (arr){
  for(var i=0;i<arr.length;i++){
  sum = sum + arr[i];
  }
  return sum;
  }
console.log(res(arr));

//print prime numbers
var numbers=[1,2,3,4,5,6,7,8,9,10];

var isPrime = (num) => {
  if (num <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; 
  }
  return true;
};

(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      console.log(arr[i]);
    }
  }
})(numbers);

//print palindrome
var num = [121, 123, 1441, 567, 676, 789];

var isPalindrome = function(num) {
  var str = num.toString();
  return str === str.split('').reverse().join('');
};

(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      console.log(arr[i]);
    }
  }
})(num);

//find median
var arr1 = [6, 1, 8, 2, 4, 3];
var arr2 = [10, 2, 38, 23, 38, 45];
var arrays = [arr1, arr2];

var findMedian = function(arr) {
  arr.sort((a, b) => a - b);
  
  var length = arr.length;
  var num;
  
  if (length % 2 === 0) {
    var mid1 = arr[length / 2 - 1];
    var mid2 = arr[length / 2];
    num = (mid1 + mid2) / 2;
  } else {
    num = arr[Math.floor(length / 2)];
  }
  
  return num;
};

var findMedians = function(arrays) {
  var medians = arrays.map(arr => findMedian(arr));
  return medians;
};

console.log(findMedians(arrays));  

//remove duplicates
var arr = [1,2,2,3,4,5,5,5,6,7,8,8,9];
var res = function (arr){
  var temp=[];
var obj={};
var output=[];
  for(var i=0;i<arr.length;i++){
    var ele = arr[i];
    if(!obj[ele]){
      obj[ele]=true;
      output.push(ele);
      }
      
    }
    return output;
}
console.log(res(arr));

//rotate by k times
var arr = [1, 2, 3, 4, 5, 6, 7];
var k = 5;
var rotateArray = function(arr, k) {
  var n = arr.length;
  k = k % n; 
  var rotated = arr.slice(-k).concat(arr.slice(0, -k));
  return rotated;
};

console.log(rotateArray(arr, k));  



//programs using IIFE function
// Print odd numbers in an array using IIFE function
var arr = [1,2,3,4,5,6,7,8,9];
var res = ((arr) => {
    var temp = []; 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            temp.push(arr[i]);
        }
    }
    return temp;
})(arr); 

console.log(res); 


//  Convert all the strings to title caps in a string array
var str = "javascript";

var result = (function(str) {
    var temp = [];
    var arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i].toUpperCase());
    }
    
    return temp.join('');
})(str);

console.log(result);  


//Sum of all numbers in an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = (function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
})(arr);

console.log(result);  


//print prime numbers

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
  var isPrime = (num) => {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; 
    }
    return true;
  };

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      console.log(arr[i]);
    }
  }
})(numbers);


//print palindrome
var num = [121, 123, 1441, 567, 676, 789];

(function(arr) {
  var isPalindrome = function(num) {
    var str = num.toString();
    return str === str.split('').reverse().join('');
  };

  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      console.log(arr[i]);
    }
  }
})(num);


//find median
var arr1 = [6, 1, 8, 2, 4, 3];
var arr2 = [10, 2, 38, 23, 38, 45];
var arrays = [arr1, arr2];

var findMedian = (function() {
  return function(arr) {
    arr.sort((a, b) => a - b);
  
    var length = arr.length;
    var num;
  
    if (length % 2 === 0) {
      var mid1 = arr[length / 2 - 1];
      var mid2 = arr[length / 2];
      num = (mid1 + mid2) / 2;
    } else {
      num = arr[Math.floor(length / 2)];
    }
  
    return num;
  };
})();

arrays.forEach(arr => {
  console.log(findMedian(arr));
});


//remove duplicates
var arr = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9];

var res = (function(arr) {
  var temp = [];
  var obj = {};
  var output = [];

  for (var i = 0; i < arr.length; i++) {
    var ele = arr[i];
    if (!obj[ele]) {
      obj[ele] = true;
      output.push(ele);
    }
  }

  return output;
})(arr);

console.log(res);  



//rotate by k times
var arr = [1, 2, 3, 4, 5, 6, 7];
var k = 5;

var rotatedArray = (function(arr, k) {
  var n = arr.length;
  k = k % n;
  var rotated = arr.slice(-k).concat(arr.slice(0, -k));
  return rotated;
})(arr, k);

console.log(rotatedArray);  
