// 1.Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
// Ans:
// anonymous function:
var odd = function (arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      temp.push(arr[i]);
    }
  }
  return temp;
}
console.log(odd([16, 17, 18, 19, 20, 21, 22]));

// IIFE
(function(arr){
  var temp = [];
  for (var i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
      temp.push(arr[i]);
}
}
console.log(temp)
})([16, 17, 18, 19, 20, 21, 22])

// b.Convert all the strings to title caps in a string array
// Ans:
// anonymous function:
var upp = function (str) {
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
console.log(upp(["g", "i", "f", "t", "i", "n"]));

// IIFE
(function (str) {
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(" "));
}(["g", "i", "f", "t", "i", "n"]));

// c.Sum of all numbers in an array
// Ans:
// anonymous function:
var num = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(num([7, 2, 3, 6, 5, 2]));

// IIFE
(function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}
([7, 2, 3, 6, 5, 2]));

// d.Return all the prime numbers in an array
// Ans:
// anonymous function:
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var prime = arr.filter(function (num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
})
console.log(prime);

// IIFE
(function(arr){
  arr = arr.filter((num) => {
  for (var i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) return false;
  }
  return num > 1;
  });
  console.log(arr);
  })([1,2,3,4,5,6,7,8])

// e.Return all the palindromes in an array
// Ans:
// anonymous function:
var array = ["radar", "Flower", "level", "Planet", "madam", "1234321"];
var palindromes = function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        if (word === word.split('').reverse().join('')) {
            result.push(word);
        }
    }
    return result;
}(array);
console.log(palindromes);

// IIFE
var array = ["radar", "Flower", "level", "Planet", "madam", "1234321"];
var palindromes = (function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        if (word === word.split('').reverse().join('')) {
            result.push(word);
        }
    }
    return result;
})(array);
console.log(palindromes);

// f.Return median of two sorted arrays of the same size.
// Ans:
// anonymous function:
// IIFE
// g.Remove duplicates from an array
// Ans:
// anonymous function:
var arr = [1,2,1,3,1,4,5,5,6,];
var uniquearrey = function(arr){
  var uniquearr = [];
  for (let i = 0; i < arr.length; i++){
     if (!uniquearr.includes(arr[i])) {
            uniquearr.push(arr[i]);
    }
  }
    return uniquearr;
  }(arr)
  console.log(uniquearrey);

// IIFE
var arr = [1, 2, 1, 3, 1, 4, 5, 5, 6];
var uniqueArray = (function(arr) {
    var uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
})(arr);
console.log(uniqueArray);

// h.Rotate an array by k times
// Ans:
// anonymous function:
// IIFE

//2.Do the below programs in arrow functions.
// a.Print odd numbers in an array
// Ans:
// arrow functions
var odd = (arr) => {
  var temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      temp.push(arr[i]);
    }
  }
  return temp;
};

console.log(odd([16, 17, 18, 19, 20, 21, 22]));

// b.Convert all the strings to title caps in a string array
// Ans:
// arrow functions
var upp = (str) => {
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
console.log(upp(["g", "i", "f", "t", "i", "n"]));

// c.Sum of all numbers in an array
// Ans:
// arrow functions
var num = (arr) => {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(num([7, 2, 3, 6, 5, 2]));

// d.Return all the prime numbers in an array
// Ans:
// arrow functions
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var prime = arr.filter((num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
})
console.log(prime);

// e.Return all the palindromes in an array
// Ans:
// arrow functions
var array = ["radar", "Flower", "level", "Planet", "madam", "1234321"];
var palindromes = ((arr) => {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        if (word === word.split('').reverse().join('')) {
            result.push(word);
        }
    }
    return result;
})(array);
console.log(palindromes);