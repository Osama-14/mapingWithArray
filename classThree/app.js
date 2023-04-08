// function great() {
//   console.log("hello students" + studentName);
// }

// great("Nadir");
// great("Ikhlas");
// great("Ameen");

// function factorial (num) {
//     if (num > 1) {
//         return num * factorial(num - 1);
//     }

// }

// console.log(factorial(5));

//JAVASCRIPT ARRAY

// const numbers = [4, 9, 16, 25];
// const squareRoots = numbers.map((number) => Math.sqrt(number));
// console.log(squareRoots); // [2, 3, 4, 5]

// const numbers = [1, 2, 3, 4];
// const objects = numbers.map((number, index) => {
//   return {
//     id: index + 1,
//     value: number,
//     doubled: number * 2
//   };
// });
// console.log(objects);

// const courses = ["php", "js", "angular", "react"];

// const newCourses = courses.map((c) => {
//   return `<li>  ${c} </li>`;
// });

// console.log(courses);
// console.log(newCourses);



let countings = [1,2,3,4,5,6,7,8,9,10];

let add = 4;

let table = countings.map((s)=> s* add )


console.log(table)