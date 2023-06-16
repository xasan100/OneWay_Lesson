// setTimeout(() => {
//     console.log("this is the first message");
// }, 5000);
// setTimeout(() => {
//     console.log("this is the second message");
// }, 3000);


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
//     console.log("finshed....");
// }, 0);

// setTimeout(() => {
//     console.log("loading....");
// }, 1000);

// console.log('started....');


const res = '{"name":"asadbek", "age":42}';

try {
    // console.log(JSON.parse(res));
}
catch (error) {
    console.log(error.name);
}



// const loginFacebook = (lg, ps, call) => {
//     setTimeout(() => {
//         if (dataBase.muhammad.login === lg && dataBase.muhammad.password === ps) {
//             return call(`Welcome to ${dataBase.muhammad.fullName} Facebook`);
//         }
//         else {
//             return call('login yoki password xatolik bor soory !!!');
//         }
//     }, 1000);
// }

// loginFacebook('muhammadali', 123434, (usr) => {
//     console.log(usr);
// });

// console.log('started....');
// const loginF = (lg, ps, call) => {
//     setTimeout(() => {
//         if (dataBase.asadbek.login === lg && dataBase.asadbek.password === ps) {
//             return call(`Welcom to facebook ${dataBase.asadbek.fullName}`)
//         }
//         else {
//             return call('login yoki password hatolik bor')


//         }
//     }, 1000)
// }
// loginF('asadbek', 12345, (usr) => {
//     console.log(usr);
// })
// console.log('finished');







// setTimeout(() => {
//     console.log("this is the first message");
// }, 2000);
// console.log('started...');

// const funck = (str) => {
//     // b = str.join('').split('').filter((value) => value.toLowerCase() === 'a')
//     // return b.length

//     return str.join('').match(/[a-z]/gi)
// }

// console.log(funck(['xas043An', 'muhamm43ad Ali', 'Er4354kinJAnov']));




// console.log('started');
// const login = (lg, ps, call) => {
//     setTimeout(() => {
//         if (dataBase.muhammad.login === lg && dataBase.muhammad.password == ps) {
//             return call(`Welcome To ${dataBase.muhammad.fullName} `);
//         }
//         else {
//             return `Malumot Notug'ri Kiritilgan`;
//         }
//     }, '1000')
// }
// login('muhammadali', 1234, (usr) => {
//     console.log(usr);
//     console.log('finished');

// })

// const dataBase = {
//     muhammad: {
//         login: 'muhammadali',
//         password: 1234,
//         fullName: 'Muhammad saikov'
//     }
// }
// console.log('started');
// const myPromise = new Promise((resolve, reject) => {
//     if (dataBase.muhammad.login === 'muhammadali' && dataBase.muhammad.password == 1234) {
//         resolve(`Welcome To ${dataBase.muhammad.fullName} `);
//     }
//     else {
//         reject(`Malumot Notug'ri Kiritilgan`);
//     }
// });
// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// console.log('fineshed');


// localStorage.setItem('name', 'xasan')
// localStorage.setItem('as', 'xasan')
// localStorage.getItem('name')
// localStorage.removeItem('as')
// localStorage.clear()