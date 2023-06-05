

// let data = {
//     name: 'asadbek',
//     age: 14,
//     chilid: {
//         name: 'diyora',
//         age: 14,
//         chilid: {
//             name: 'baxtiyor',
//             age: 15,
//             chilid: {
//                 name: 'xasan',
//                 age: 22
//             }
//         }
//     }
// }
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

// console.log(person.lastName);
