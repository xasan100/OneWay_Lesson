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







const res = '{"name":"asadbek", "age":42}';
try {
    // console.log(res, 'json');
    // console.log(JSON.parse(res, 'jsondan chiqarilgani'));
    // console.log(JSON.parse(json));
}
catch {
    console.log('bug');
}


const dataBase = {
    asadbek: {
        login: 'asadbek',
        password: 1234,
        fullName: 'Asadbe Ubaydellayev'
    }
}

console.log('started....');
const loginF = (lg, ps, call) => {
    setTimeout(() => {
        if (dataBase.asadbek.login === lg && dataBase.asadbek.password === ps) {
            return call(`Welcom to facebook ${dataBase.asadbek.fullName}`)
        }
        else {
            return call('login yoki password hatolik bor')
            
                
        }
    }, 1000)
}
 loginF('asadbek', 12345, (usr) => {
    console.log(usr);
})
console.log('finished');





// console.log('started');
// const login = (lg, ps, call) => {
//     setTimeout(() => {
//         if (dataBase.xasan.login === lg && dataBase.xasan.password == ps) {
//             return call(`Welcome To ${dataBase.xasan.fullName} `);
//         }
//         else {
//             return `Malumot Notug'ri Kiritilgan`;
//         }
//     }, '1000')
// }
// login('xasan', 1234, (usr) => {
//     console.log(usr);
//     console.log('finished');

// })



// setTimeout(() => {
//     console.log("this is the first message");
// }, 2000);
// console.log('started...');

