const max = [8, 4, 7, 2, 3, 5, 6, 1, 9, 1232, 4234, 132, 3422]

// console.log(max.sort((a, b) => a - b).slice(-1), 'max');
// console.log(max.sort((a, b) => a - b)[0], 'min');

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
    },
    , {
        name: 'yosixon',
        age: 15,
        status: 'student'
    }

]




const count = (array) => {
    b = array.map((value) => value.age)
    return b
}

count(obj)

const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// console.log(array1.reduce(reducer));

// console.log(array1.reduce(reducer, 5));

