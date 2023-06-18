


// console.log();
// res = 0
// while (true) {
//     if (group) {
//         res = group.age;
//     }
//     else break
//     group = group.chilid
// }
// console.log(res);

// let res = 0
// while (true) {
//     if (data) {
//         res += data.age;
//     }
//     else break
//     data = data.chilid
// }
// console.log(res);

function Person(firstName, lastName) {
    if (!new.target) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

let person = Person("John", { name: 'xasan', age: 21, });

// const HeyFunc = () => {
// }

// let one = {
//     name: 'xasan',
//     age: 23,
//     HeyFunc: function () {
//         console.log(this.age);
//         console.log(one.age);
//     },
//     status: 'student',
//     email: 'xasandev@mail.ru'
// }
// one.HeyFunc();


// let { name: chenge, age, status, email } = data


// console.log(...obj, { name: 'xasan', age: 21 });

let data = {
    name: 'asadbek',
    age: 5,
}
let { name, fps } = data
// console.log(fps);

// let age = 123

let num = 0
for (let i = 0; data;) {
    data ? num += data.age : false
    data = data.chilid
}


// console.log(num);



// let sum = 0
// while (1) {
//     if (data) {
//         sum += data.age;
//     }
//     else break
//     data = data.chilid
// }
// console.log(sum);

const Count = () => {

}
Count(10)



const one = [9, 8, 11, 12, 1, 13, 21, 123, 0, 2345, 234]
// console.log(one.sort((a, b) => a - b)); 




setTimeout(() => {
    console.log('hey guys1');
}, '0')
console.log('h ey guys');

