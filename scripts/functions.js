function checkName() {
    if (inputName.value == '' || inputName.value.length <= 3) {
        alert("Your username value is too short or empty")
        const errorx = document.getElementById('name');
        errorx.style.borderColor = 'red';
    }
}

function checkEmail() {
    const emailValue = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputEmail.value.match(emailValue) || inputEmail.value != '') {
        form.inputEmail2.focus;
        return true;
    } else {
        alert('Invalid Email Format!')
    }
}

function checkMail2() {
    if ((inputEmail.value) !== (inputEmail2.value)) {
        alert("Not Matching");

    } else {
        return true;
    }
}





document.getElementById('btn').onclick = function checkAll() {
    checkName();
    checkEmail();
    checkMail2();

}