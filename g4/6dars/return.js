// setTimeout(() => {
//     console.log("this is the first message");
// }, 5000);
// setTimeout(() => {
//     console.log("this is the second message");
// }, 3000);
// setTimeout(() => {
//     console.log("this is the third message");
// }, 1000);

let sum = 0
const Count = (n) => {
    // for (let i = 0; i <= n; i++) {
    //     if (i) {
    //         sum += i
    //     }

    // }
    sum += n
    // console.log(n);
    if (n == 5) {
        return 1
    }
    else {
        Count(n - 1)
    }
}

Count(10)
// console.log(sum);


// let company = {
//     sales: [
//         { name: "John", salary: 10 },
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

// setTimeout(() => {
//     console.log("this is the first message");
// }, 5000);
// setTimeout(() => {
//     console.log("this is the second message");
// }, 3000);








