// Step number 1(add click event handler eith the submit buttton)

document.getElementById('btn-submit').addEventListener('click', function () {
     
    
// step - 2(get the Email address inside the input field)
// always remember to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value
// 3rd step(get the password inside the password filed)

const passwordField = document.getElementById('user-password');
const pass = passwordField.value;
//DANGER = do not varify email password in the client side
// step=4(verify email and password) 
if(email === 'sayem@gamil.com' && pass === 'secret'){
    window.location.href='bank.html'

}
else{alert('toi password vole gecos ,toke ajke tejjo potro gosona korbo')}


})

