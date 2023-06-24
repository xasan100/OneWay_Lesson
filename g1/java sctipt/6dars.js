// const Count = (n) => {
//     let b = n + ''
//     let sum = 0
//     for (let i = 0; i <= b; i++) {
//         if (i) {
//             sum += i;
//         }
//     }
//     console.log(sum);

// }
// Count(10)


const Data = (array) => {
    // b = array.join('').split('').filter((value) => value.toLowerCase() === 'a')
    // return b
    // return array.join('').match(/[0-9]/gi)
}
// console.log(Data([false, 'muh45a6mmad nur', 'yoas546ihon', 'xAsAn']));

// a harflar chiqarich katta kichik
//  number larni chiqarish va bir biriga qushish
// const max = [12, 3, 4, 5, 4, 556, 57, 67, 687]
// const min = [12, 3, 4, 5, 4, 556, 57, 67, 687]


const obj = [
    {
        name: 'yosixon',
        age: 15,
        status: 'student'
    }
    , {
        name: 'yosixon',
        age: 15,
        status: 'student'
    }
    , {
        name: 'yosixon',
        age: 15,
        status: 'student'
    }

]
const userData = (user) => {
    b = user.map((value) => value.age)
    return b
}

console.log(userData(obj));



