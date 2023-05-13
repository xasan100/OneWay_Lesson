const students = [
    { id: 1, year: 1999, name: 'Rakhimjonov Davronbek' },
    { id: 2, year: 2007, name: 'Komil Muhammadiyev' },
    { id: 3, year: 2003, name: 'Mahkamov Tohirbek' },
    { id: 4, year: 2004, name: 'Nuraliev Zuhriddin' },
    { id: 5, year: 2001, name: 'Dilshodbek Boymamatov' },
    { id: 6, year: 2002, name: 'Muhharam Ozodboyeva' },
    { id: 7, year: 2001, name: 'Azimov Umarbek' },
    { id: 8, year: 2001, name: 'Abdurazzaqov Hasanboy' },
    { id: 9, year: 2003, name: 'Davlyatov MuhammadAli' },
    { id: 10, year: 2005, name: 'Zohidova Ruqiya' },
    { id: 11, year: 2004, name: 'Abduhamidov Nurbek' },
    { id: 12, year: 2005, name: 'Nizamov Sardorbek' },
];

// sortYear 
// const sortByYear = () => {
//     let res = students.sort((a, b) => a.year - b.year);
//     res = students
// }
// sortByYear()

// sortName
// const sortByName = () => {
//     let second = students.sort((a, b) => a.name.localeCompare(b.name))
//     second = students
// }
// sortByName()

const DeleteFunck = (id) => {
    let byId = students.filter((value) => value.id !== id)
    // console.log(byId);
}
DeleteFunck(1)
// console.log(students);


const addFunc = (user) => {
    b = [...students, { id: students.length + 1, ...user }]
    // console.log(b);
}
addFunc({ year: 1998, name: 'Zohidov Roziya' })


const updateUser = (data) => {
    up = students.map((value) => value.id === data.id ? { ...value, [data.type]: data?.value } : value)
    // console.log(up);

}
updateUser({ id: 8, type: 'name', value: 'Xusan' })
const SearchName = (key) => {
    search = students.filter((value) => value.name.toLowerCase().includes(key.toLowerCase()))
    console.log(search);
}
SearchName('z')