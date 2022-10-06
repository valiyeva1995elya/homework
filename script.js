
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
    if (checkDate(user)) {
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = "./1.html"
    }
}


function checkDate(user) {
    if (!validateEmail(user.email)) {
        alert("Incorrect email!")
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

            if (check.checked == true) {
                localStorage.setItem('saveUser', JSON.stringify(arrCheckUser[i]))
                document.location.href = './3.html'
            } else
                localStorage.setItem('myUser', JSON.stringify(arrCheckUser[i]))
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
} else if (localStorage.getItem('myUser')) {
    let homePageArr = JSON.parse(localStorage.getItem('myUser'))
    homePageName.textContent += homePageArr.name
    homePageSurname.textContent += homePageArr.surname
    homePageAge.textContent += homePageArr.age
}

function deleteUser() {
    let saveUserCheck2 = JSON.parse(localStorage.getItem('users'))
    let toCheck = JSON.parse(localStorage.getItem("saveUser"))
    let toCheck2 = JSON.parse(localStorage.getItem("myUser"))
    
    if (localStorage.getItem("saveUser") == true) {
        
        console.log(localStorage.getItem("saveUser"))
        for (let i = 0; i < saveUserCheck2.length - 1; i++) {
            if (toCheck.email == saveUserCheck2[i].email && toCheck.password == saveUserCheck2[i].password) {
                saveUserCheck2.splice(i, 1)
                localStorage.setItem('users', JSON.stringify(saveUserCheck2))
                localStorage.removeItem("saveUser")
            }
        }
    } else if (toCheck2 == true) {
        for (let i = 0; i < saveUserCheck2.length - 1; i++) {
            if (toCheck2.email == saveUserCheck2[i].email && toCheck2.password == saveUserCheck2[i].password) {
                saveUserCheck2.splice(i, 1)
                localStorage.setItem('users', JSON.stringify(saveUserCheck2))
                localStorage.removeItem("saveUser")
            }
        }






        // if (toCheck2.email == saveUserCheck2[i].email && toCheck2.password == saveUserCheck2[i].password) {
        //     saveUserCheck2.splice(i, 1)
        //     localStorage.setItem('users', JSON.stringify(saveUserCheck2))
        //     localStorage.removeItem("myUser")


        // }if (toCheck.email == saveUserCheck2[i].email && toCheck.password == saveUserCheck2[i].password ){
        //     saveUserCheck2.splice(i, 1)
        //     localStorage.setItem('users', JSON.stringify(saveUserCheck2))
        //     localStorage.removeItem("saveUser")
        // }

        // document.location.href = './2.html'

    }



}
function logOut() {
    localStorage.removeItem('saveUser')
    localStorage.removeItem('myUser')
    document.location.href = './1.html'
}
