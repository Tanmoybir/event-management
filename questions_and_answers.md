
MCQ TEST
1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greeting = {};
console.log(greeting);
A: {}
B: ReferenceError: greeting is not defined
C: undefined
Answer: A.{}
let greeting is a variable.
greeting = {};this line set an empty object.
so that console.log(greeting) displayed {}



2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer:B.TypeError
when call the function we pass a number(1) and a string("2") that's why it gives TypeError.JavaScript cannot convert the string to a number automatically in this context, hence the error.



3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer:A.['🍕', '🍫', '🥑', '🍔']
 info.favoriteFood property to the first element of the food array, which is "🥑".the next line overwrite it with the string "☕". This change doesn't affect the food array itself, as it's a separate data structure.
So, when you log the food array, it will still contain the original values:
["🥑", "🍕", "🍷", "🍻"]

4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer:B. Hi there, undefined
This function expects a "name" argument.But
when we call the function without "name" parameter it will result in a "name is not defined" in JavaScript .



5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer:C. 3
The nums array contains the values [0, 1, 2, 3].
The code uses the forEach method to iterate through each element of the nums array.
Inside the forEach loop, there's an if statement that checks if the current element (num) is truthy.
In JavaScript, values like 1, 2, and 3 are considered truthy because they are non-zero numbers.
When the if condition is met (i.e., when num is truthy), the count variable is incremented by 1. 