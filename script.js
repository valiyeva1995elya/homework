
function singUp() {
    let users
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"))
    } else {
        users = []
    }

    let user = {
        email: document.querySelector('.email').value,
        password: document.querySelector('.password').value,
        name: document.querySelector('.name').value,
        surname: document.querySelector('.surname').value,
        age: document.querySelector('.age').value,

    }
    let findUser = users.filter(person => person.email == user.email)
    if (findUser.length > 0) {
        alert("This email already exist")
        return
    }
    if (checkDate(user)) {
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = "./1.html"
    }
}


function checkDate(user) {
    if (!validateEmail(user.email)) {
        alert("Incorrect email!")
        return false
    } if (!validatePassword(user.password)) {
        alert("Incorrect password!")
        return false
    } if (!validateAge(user.age)) {
        alert("Incorrect age!")
        return false
    } else if (user.name.length < 1 || user.surname.length < 1 || user.password.length < 1 || user.age.length < 1) {
        alert("Complete all data!")
        return false;
    } else {
        return true
    }
}



const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const validatePassword = (password) => {
    return String(password)
        .match(
            /^\S*(?=.*[A-Z])(?=.*[0-9])(?=.*[/$!*])[a-zA-Z0-9*/$!]{8,}\S*$/g
        );
};
const validateAge = (age) => {
    return String(age)
        .match(
            /^[1-9][0-9]$|^[1-9]$|^100$/
        );
};

function singIn() {
    let arrCheckUser = JSON.parse(localStorage.getItem('users'))
    let email = document.querySelector('.em').value
    let password = document.querySelector('.ps').value
    let check = document.querySelector('#checkb')

    for (let i = 0; i <= arrCheckUser.length - 1; i++) {
        if (!validateEmail(email)) {
            alert("Incorrect email!")
            break
        } else if (email == arrCheckUser[i].email && password == arrCheckUser[i].password) {
            localStorage.setItem('saveUser', JSON.stringify(arrCheckUser[i]))
            if (check.checked == true) {
                let a = { checkbox: "true" }
                let saveUserCheck = JSON.parse(localStorage.getItem('saveUser'))
                saveUserCheck = { ...saveUserCheck, ...a };
                localStorage.setItem('saveUser', JSON.stringify(saveUserCheck))
                document.location.href = './3.html'
            } else
                localStorage.setItem('saveUser', JSON.stringify(arrCheckUser[i]))
            document.location.href = './3.html'
        }
    }
}


let homePageName = document.querySelector('.hpName')
let homePageSurname = document.querySelector('.hpSurname')
let homePageAge = document.querySelector('.hpAge')
if (localStorage.getItem('saveUser')) {
    let homePageArr = JSON.parse(localStorage.getItem('saveUser'))
    homePageName.textContent += homePageArr.name
    homePageSurname.textContent += homePageArr.surname
    homePageAge.textContent += homePageArr.age
}

function deleteUser() {
    let users = JSON.parse(localStorage.getItem("users"))
    let saveUser = JSON.parse(localStorage.getItem("saveUser"))
    localStorage.setItem("users", JSON.stringify(
        users.filter(user => user.email != saveUser.email)
    ))
    logOut()
}

function logOut() {
    localStorage.removeItem('saveUser')
    document.location.href = './1.html'
}
