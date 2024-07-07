//programs using arrow function
// Print odd numbers in an array using arrow function
var arr=[1,2,3,4,5,6,7,8,9];
var temp =[];
var res = (arr) => {
for (var i=0;i<arr.length;i++){
   if(arr[i]%2 !==0){
     temp.push(arr[i]);
     }
  }
  return temp;
}
console.log(res(arr));



//print prime numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var isPrime = (num) => {
  if (num <= 1) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; 
  }
  return true;
};

var logPrimes = (arr) => {
  arr.forEach(num => {
    if (isPrime(num)) {
      console.log(num);
    }
  });
};

logPrimes(numbers);



//print palindrome
var num = [121, 123, 1441, 567, 676, 789];

var isPalindrome = (num) => {
  var str = num.toString();
  return str === str.split('').reverse().join('');
};

((arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      console.log(arr[i]);
    }
  }
})(num);


// Convert all the strings to title caps in a string array
var str = "javascript";

var res = (str) => {
    var temp = [];
    var arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i].toUpperCase());
    }

    return temp;
};

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
