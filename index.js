// QUESTION ONE
// What are the differences between mutating array methods and
//  non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

// Mutating array method is changes an array itself instead of returning a new array with the new changes
// let array1=[]
//array1. pop()
//array1. push()
//array1. unshift()
//array1. reverse()
//array1. sort()
//array1. splice()

//non-mutation array method returns a new array from the changes made.
//let array2=[]
//array2. filter()
//array2. slice()
//array2. map()
//array2. concat()


// QUESTION2
languages =['C#', 'JavaScript', 'Ruby', 'PHP', "Python"]

//1.Add ‘Kotlin’ to the end of the array
// languages[3].push('kotlin')
console.log(languages)

// 2.	Add ‘Java’ after ‘Ruby’
// let index = languages.indexOf("Ruby");
languages.splice(2,0, "Java");
console.log(languages);


//3.Remove the first item in the array
// languages.shift()
// console.log(languages)

// 4.	Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.splice(0,0, "Scala","Swift");
console.log(languages);

//5.	Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(6, 1,"Go","Rust");
console.log(languages)

// QUESTION 3
// 3.	What will be the value of fruit after calling the function changeFruit?

// let fruit = ['apple', 'mango', 'banana'];
// 	function changeFruit(fruit) {
//     	fruit[2] = "orange";
//     	return fruit;   
// 	}
// console.log(fruit)
// changeFruit();
// ANSWER = ( it changes the banana to orange)


//QUESTION FOUR
//4.	Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
//e.g. max([4, 5, 10, -2]) // maximum value is 10

function max(arr) {
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
        maxVal = arr[i];
      }
    }
    return maxVal;
  }
  
  console.log(max([2,7,9,15]));

//   QUESTION FIVE

// 5.	Write a function called valTimesIndex which accepts an array of numbers 
//and returns a new array with each value multiplied by the index it is at in the array:
// e.g.,valTimesIndex([1,2,3]) // [0,2,6] valTimesIndex([5,10,15]) // [0,10,30]

  function valTimesIndex(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * i);
    }
    return result;
  }
  
  console.log(valTimesIndex([1, 2, 3, 4, 5])); // Output: [0, 2, 6, 12, 20]
  
  

    