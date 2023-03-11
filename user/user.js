function formVallidate(){

}


// getting the useremail
var userEmail = document.getElementById('email-signup');
var userEmailValue = userEmail.value;

document.getElementById('signup-btn').addEventListener('click', function(){
    console.log(userEmailValue);
})













const signUpBtn = document.getElementById('signup-btn').addEventListener('click', function(){
    const emailId = document.getElementById('email-signup');
    const emailValue = emailId.value;
    console.log(emailValue);
})