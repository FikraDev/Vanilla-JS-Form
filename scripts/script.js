let main = document.getElementById("main");

let div1 = document.createElement('div');
div1.setAttribute("id", "div1")
main.appendChild(div1); //never add quotes to the item in the parameters

let formHeader = document.createElement("h2")
div1.appendChild(formHeader)
formHeader.setAttribute("id", "fheader")
formHeader.textContent = "Sign Up"

let form = document.createElement("form") //create form
div1.appendChild(form); // add form to document

let inputName = document.createElement("input");
form.appendChild(inputName);
inputName.setAttribute("type", "text");
inputName.setAttribute("id", "name");
inputName.setAttribute("placeholder", "Enter Full Name");

let inputEmail = document.createElement("input");
form.appendChild(inputEmail);
inputEmail.setAttribute("type", "text");
inputEmail.setAttribute("id", "email1");
inputEmail.setAttribute("placeholder", "Enter Email Address");

let inputEmail2 = document.createElement("input");
form.appendChild(inputEmail2);
inputEmail2.setAttribute("type", "text");
inputEmail2.setAttribute("id", "email2");
inputEmail2.setAttribute("placeholder", "Confirm Email");

let inputPassword = document.createElement("input");
form.appendChild(inputPassword);
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("id", "password");
inputPassword.setAttribute("placeholder", "Enter Password");

let inputPassword2 = document.createElement("input");
form.appendChild(inputPassword2);
inputPassword2.setAttribute("type", "password");
inputPassword2.setAttribute("id", "password2");
inputPassword2.setAttribute("placeholder", "Confirm Password");

let div2 = document.createElement("div")
form.appendChild(div2);
div2.setAttribute("id", "divv2")

let inputCheckBox = document.createElement("input");
div2.appendChild(inputCheckBox);
inputCheckBox.setAttribute("type", "checkbox");
inputCheckBox.setAttribute("id", "cbox");

let checkBoxTxt = document.createElement("label");
div2.appendChild(checkBoxTxt);
checkBoxTxt.innerHTML = "I accept the <strong>Terms of Use</strong> & <strong>Privacy Policy</strong>";

let div3 = document.createElement("div")
form.appendChild(div3)
div3.setAttribute("id", "divv3")

let button = document.createElement("button");
div3.appendChild(button)
button.setAttribute("id", "btn")
button.textContent = "Create Account";

//Form Validation functions

function checkName() {
    if (inputName.value == '' || inputName.value.length < 3) {
        alert("Your username value is too short or empty");
        document.form.inputName.focus(); //prevents other alerts until this input is met
    }
}

function checkEmail() {
    const emailValue = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputEmail.value.match(emailValue) || inputEmail.value != '') {
        return true;
    } else {
        alert('Invalid Email Format!')
        document.form.inputEmail.focus();
    }
}

function checkMail2() {
    if ((inputEmail.value) !== (inputEmail2.value)) {
        alert("Emails do not match!");
        document.form.inputEmail2.focus();
    }
}

function checkPwd() {
    if (inputPassword.value == ' ' || inputPassword.value.length <= 6) {
        alert("Password must not be empty or < 6 characters");
        document.form.inputPassword.focus();
    }
}

function confirmPwd2() {
    if (inputPassword.value !== inputPassword2.value) {
        alert("Passwords do not match!")
        inputPassword2.style.backgroundColor = 'red';
        document.form.inputPassword2.focus();
    }

}

document.getElementById('btn').onclick = function checkAll() {
    checkName();
    checkEmail();
    checkMail2();
    checkPwd();
    confirmPwd2();
}