// geeting input value
function gettingInputValue(id) {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    console.log(inputValue);
    return inputValue;
}

const signUpBtn = document.getElementById('signup-btn-id').addEventListener('click', function () {
    const signupName = gettingInputValue('signup-name-id');
    console.log(typeof (signupName));
    const signupPwd = gettingInputValue('pwd-id');
    console.log(typeof (signupPwd))
    formVallidation(signupName, signupPwd);
})



function formVallidation(name, pwd, boyos) {
    const userName = name;
    const password = pwd;
    const age = boyos;
    console.log(password)
    try {
        if (userName == '') throw "username must be filled"
        if (password == '') throw "password must be filled";
        if (password.length < 8) throw "password must be minimun 8 characters";
        if (password.includes('-')) throw "remove hyphen";


    }
    catch (err) {

        if (userName == '') {
            const paraname = document.createElement('span');
            paraname.innerText = `${err}`;
            // paraname.classList('peer-invalid:visible');
            // paraname.classList('text-pink');
            const nameField = document.getElementById('name-section');

            nameField.appendChild(paraname);

        }



        else {
            const para = document.createElement('span');
            para.innerText = `${err}`;
            const passwordField = document.getElementById('pwd-section');
            passwordField.appendChild(para);
            console.log(err);
        }
    }
}



