// 1. Variables
// - Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (`let`, `const`, or `var`). Try logging it using `console.log`

let favoriteColor = "blue";
const height = 160;
let likePizza = true;

console.log(favoriteColor);
console.log(height);
console.log(likePizza);

// 2. Functions
// - Write a function sum that finds the `sum` of two numbers. 
//- Side quest - Try passing in a string instead of a number and see what happens?
// - Write a function called `canVote` that returns true or false if the `age` of a user is > 18

function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 3));
console.log(sum("2", 3));

function canVote(age) {
    return age > 18;
}   
console.log(canVote(20));
console.log(canVote(15));

// 3. If/Else
// - Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "The number is even.";
    } else {
        return "The number is odd.";
    }
}

// 4. Loops
// - Write a function called `sum` that finds the sum from 1 to a number

function sumTo(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// 5. Objects
// - Write a function that takes a `user` as an input and greets them with their name and age
// - Write a function that takes a new object as input which has `name` , `age`  and `gender` and greets the user with their gender (Hi `Mr/Mrs/Others` harkirat, your age is 21)
// - Also tell the user if they are legal to vote or not

const user = {
    name: "Rasmi",
    age: 21,
    gender:"male"
}

function greetUser(user) {
    return `Hi ${user.name}, your age is ${user.age}`;
}

function greetUserWithGender(user) {
    let title = "";
    if (user.gender === "male"){
        title = "Mr";
    }else if(user.gender === female){
        title = "Mrs";
    }else{
        title = "Others";
    }
    console.log( `Hi ${title} ${user.name}, your age is ${user.age}`);
}

greetUserWithGender(user);


// **6. Arrays**
// - Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about `filter` in JS

const arr = [1,2,3,4,5,6,7,8];

const newArr = arr.filter((num) => num % 2 === 0);
console.log(newArr);

// **7. Array of Objects**
// - Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

const users = [
    {
        name: "Rasmi",
        age: 21
    },
    {
        name: "Ranjan",
        age: 15
    },
    {
        name: "Sahoo",
        age: 25
    }
];

function filterUsers(users) {
    return users.filter((user) => user.age > 18);
}

filterUsers(users);


// **8. Object of Objects** 
// - Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

const users2 = [
    {
        name: "Rasmi",
        age: 21,
        gender:"male"
    },
    {
        name: "Ranjan",
        age: 15,
        gender:"male"
    },
    {
        name: "Sahoo",
        age: 35,
        gender:"female"
    },
]

function filterUsers(users) {
    return users.filter((user) => user.age > 18 && user.gender === "male");
}

console.log(filterUsers(users2));