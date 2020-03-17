var name1 = document.querySelector('.name');
var nameMsg =  document.createElement('h2');

var email = document.querySelector('.email');
var emailMsg =  document.createElement('h2');

var password = document.querySelector('.password');
var passMsg =  document.createElement('h2');

var button = document.querySelector('.submit')


var result = document.createElement('p');
result.className = 'result'

button.addEventListener('click', abc);
function abc(e) {
    e.preventDefault();
    if(name1.value.trim().length == 0) {
        nameMsg.textContent = 'Name cannot be empty';
    }
    else if (email.value.trim().length == 0) {
        emailMsg.textContent = 'Email cannot be empty';
    }
    else if (password.value.trim().length == 0) {
        passMsg.textContent = 'Password cannot be empty';
    }
    else {
        result.textContent = `You are ${name1.value} Your email: ${email.value} and password is  ${password.value}`;
    }
}

name1.after(nameMsg);
email.after(emailMsg);
password.after(passMsg);
document.body.append(result);