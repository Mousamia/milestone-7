// geeting inpt value
function gettingInputValue (id){
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    console.log(inputValue);
}

gettingInputValue('email-signup');