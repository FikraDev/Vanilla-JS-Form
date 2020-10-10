document.getElementById('btn').onclick = function checkName() {
    if (inputName.value == '' || inputName.value.length <= 3) {
        alert("Your username value is too short or empty")
        const errorx = document.getElementById('name');
        errorx.style.backgroundColor = 'red'
    } else {
        inputName.value = value;
    }

}