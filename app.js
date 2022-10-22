const isValidEmail = (email) => {
    // if(!email) return false;
    const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(regExp);
}

const submitBtn = document.querySelector('button[type=submit]');
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type=email]')

/* 
msg: {
    text: "Please Provide a valid email",
    isValid: false
}
*/

const showMsg = (isValid) => {
    const text = isValid ?  "Successfully subscribe!" : "Please provide a valid email.";
    const color = isValid ?  "green" : "red";
    const msgEl = document.querySelector('#msg');
    msgEl.textContent = text;
    msgEl.style.color = color;
}

const submitHandler = (e) => {
    e.preventDefault();
    const isValid = isValidEmail(emailInput.value);

    if(!isValid){
        form.classList.add('ring-2','ring-red-soft');
        form.querySelector('#error-icon').classList.remove('hidden');
        showMsg(isValid);
    }else{
        // emailInput.classList.add('animate-bounce')
        form.classList.remove('ring-2','ring-red-soft');
        form.querySelector('#error-icon').classList.add('hidden');
        showMsg(isValid);
     
    }
   
}
form.addEventListener('submit', submitHandler);

