// geeting input value
function gettingInputValue(id) {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    console.log(inputValue);
    return inputValue;
}


const signUpBtn = document.getElementById('signup-btn-id').addEventListener('click', function () {
    const signupName = gettingInputValue('signup-name-id');
    console.log(typeof(signupName));
    const signupPwd = gettingInputValue('pwd-id');
    formVallidation(signupName, signupPwd);
})




