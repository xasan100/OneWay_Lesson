const one = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < one.length; i++) {
//     console.log(one[i]);
// }

for (value of one) {
    // console.log(value);
}
for (index in one) {
    console.log(index);
}