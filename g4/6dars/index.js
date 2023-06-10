// let company = {
//     sales: [
//         { name: "John", age: 10 },
//         { name: "Alice", salary: 16 },
//     ],
//     development: {
//         sites: [
//             { name: "Peter", salary: 20 },
//             { name: "Alex", salary: 1 },
//         ],
//         internals: [{ name: "Jack", salary: 1 }],
//     },
// };

// function count(company) {
//     if (Array.isArray(company)) {
//         return company.reduce((prev, current) => prev + current.salary, 0);
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(company)) {
//             sum += count(subdep);
//         }
//         return sum;
//     }
// }

// console.log(count(company));


// const one = [
//     { name: "John", age: 10 },
//     { name: "Alice", age: 16 },
//     { name: "Akmal", age: 16 },
//     { name: "shiazim", age: 16 },
//     { name: "Muhammad Ali", age: 16 },
// ]

// b = one.map((value) => {
//     return value
// })
// console.log(b);

const arr = [123, 5, 345, 1, 03, 42, 3456, 5678, 567890, 56789]
const b = ['xAsAn Aburazakov']

const deleteFunc = ['olma', 'nok', ' behi']
// arr.map((value) => {
//     console.log(value);
// })

// arr.filter((value) => {
//     console.log(value > 10 ? value : null);
// })

// console.log(...arr);
//    console.log(...one,'name');


function isBigEnough(value) {
    return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);