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


const write = (key) => {
    // let res = students.filter((value) => value.name.toLowerCase().includes(key.toLowerCase()))
    let b = students.filter((value) => value.id === key)
    // console.log(b);
}
write(3)

const delteFunc = (id) => {
    let res = students.filter((value) => value.id !== id)
    // console.log(res);
}
delteFunc(3)


const addUser = (user) => {
    let res = [...students, { id: students.length + 1, ...user }]
    console.log(res);
}
addUser({ year: 2010, name: 'alisher' })