

// for (let i = 0; i < one.length; i++) {
//     console.log(one[i]);
// }


// for (const value in one) {
//     console.log(value);
// }


// var yourArr = [1, 2, 3]
// [b, a] = yourArr

// console.log(one);

// console.log('foreach', exampleArray.forEach(x => console.log(x * x * x, 'forech')));
//Output: (undefined)
// console.log('----------');
// console.log('map', exampleArray.map(x => x * x * x));
//Output: [1 , 8, 27, 64, 125 ]

// const obj = [
//     {
//         name: 'xasan',
//         age: 21,
//         status: 'Dasturchi',
//         emai: 'xasan100@mail.ru',
//         hobbe: 'uxlash',
//     }
//     ,
//     {
//         name: 'xusan',
//         age: 22,
//         status: 'Trading',
//         emai: 'xusan100@mail.ru',
//         hobbe: 'sayir',
//     }
//     , {
//         name: 'sardor',
//         age: 29,
//         status: '',
//         emai: 'sardor100@mail.ru',
//         hobbe: 'futbol',
//     }
// ]
// b = obj.map((value) => value.age)

// const one = [1, 2, 3, 4, 5, 6]


// for (value of one) {
//     console.log(value,);
// }
// for (index in one) {
//     console.log(index);
// }

// function name(str) {
//     return str.match(/[0-9]/g).join('')
// }
// console.log(name('She 3a24Walks345 Tao The345 Beach'));


// const a = [1, 2, 0, 1, 34, 12, 1]
// b = a.reduce((a, b) => a + b, 0)
// console.log(b, 'arximetikka amallar bajarish uchun');

// b = a.sort((a, b) => b - a)
// console.log(b, 'malumotlarni sortlab beradi');



// do`konda kitobga narx berilgan 3.0000 so`m 
//fuction parametrga nechi berilasa kitobgan berilgan so`mani 
// k`opaytirib beradigan fuction yozing


const students = [
    { id: 1, year: 1999, name: 'Rakhimjonov Davronbek' },
    { id: 2, year: 2007, name: 'Komil Muhammadiyev' },
    { id: 3, year: 2003, name: 'Mahkamov Tohirbek' },
    { id: 4, year: 2004, name: 'Nuraliev Zuhriddi' },
    { id: 5, year: 2001, name: 'Dilshodbek Boymamatov' },
    { id: 6, year: 2002, name: 'Muhharam Ozodboyeva' },
    { id: 7, year: 2001, name: 'Azimov Umarbek' },
    { id: 8, year: 2001, name: 'Abdurazzaqov Hasanboy' },
    { id: 9, year: 2003, name: 'Davlyatov MuhammadAli' },
    { id: 10, year: 2005, name: 'Zohidova Ruqiya' },
    { id: 11, year: 2004, name: 'Abduhamidov Nurbek' },
    { id: 12, year: 2005, name: 'Nizamov Sardorbek' },
];






const arr = ['olma', 'nok', 'anor', 'tarvuz', 'olma']

const DeleteFunc = (id) => {
    let res = students.filter((value) => value.id !== id)
    // console.log(res);
}
DeleteFunc(10)

console.log('user---------');
const addUser = (user) => {
    let res = [...students, { id: students.length + 1, ...user }]
    // console.log(res);
}
addUser({ year: 2008, name: 'UBaydullayev ASADBEK' })

const serchFunc = (key) => {
    let res = students.filter((value) => value.name.toLowerCase().includes(key.toLowerCase()))
  console.log(res);
}
serchFunc('r')