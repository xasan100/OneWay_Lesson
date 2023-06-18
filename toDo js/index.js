const inputBox = document.getElementById('input-box')
const listContaier = document.getElementById('list-container')
const addTask = () => {
    if (inputBox.value === '') {
        alert(`Kechirasiz inputga ma'lumot kirtmadingiz 🧐!`)
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContaier.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);


    }
    inputBox.value = '';
    saveData();
}
listContaier.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData();

    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();

    }
}, false)

const saveData = () => {
    localStorage.setItem('data', listContaier.innerHTML)
}
const showTask = () => {
    listContaier.innerHTML = localStorage.getItem('data')
}
showTask()