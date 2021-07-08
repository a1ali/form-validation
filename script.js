const submitBtn = document.querySelector('.submitbtn');

const email = document.getElementById('email-input');
const country = document.getElementById('country-input');
const zipCode = document.getElementById('zip-input');
const pass1 = document.getElementById('password-input');
const pass2 = document.getElementById('password2-input');

const emailError = document.getElementById('email-error');
const countryError = document.getElementById('country-error');
const zipError = document.getElementById('zip-error');
const pass1Error = document.getElementById('password-error');
const pass2Error = document.getElementById('password2-error');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //check inputs
    doCheck();
})

function doCheck() {

    const emailVal = email.value.trim();
    const countryVal = country.value.trim();
    const zipCodeVal = zipCode.value.trim();
    const pass1Val = pass1.value.trim();
    const pass2Val = pass2.value.trim();


    if (emailVal === '') {
        //error
        sendError(email, emailError, 'Email is empty');
    }
    else if (!isEmail(emailVal)) {
        sendError(email, emailError, 'Email is not valid');
    }
    else {
        //success
        sendSuccess(email, emailError)
    }

    if (countryVal === '') {
        //error
        sendError(country, countryError, 'Country is empty');
    }
    else {
        //success
        sendSuccess(country, countryError)
    }

    if (zipCodeVal === '') {
        //error
        sendError(zipCode, zipError, 'ZipCode is empty');
    }
    else if (!isZipCode(zipCodeVal)) {
        sendError(zipCode, zipError, 'ZipCode is not valid');
    }
    else {
        //success
        sendSuccess(zipCode, zipError)
    }

    if (pass1Val === '') {
        //error
        sendError(pass1, pass1Error, 'Password is empty');
    }
    else {
        //success
        sendSuccess(pass1, pass1Error)
    }

    if (pass2Val === '') {
        //error
        sendError(pass2, pass2Error, 'Password is empty');
    }
    else if (pass2Val !== pass1Val) {
        sendError(pass2, pass2Error, 'Password does not match');
    }
    else {
        //success
        sendSuccess(pass2, pass2Error)
    }
}

function sendError(element, errorElement, msg){
    let parent = element.parentElement;
    parent.className = "input-container error";
    errorElement.innerText = msg;
    errorElement.style.visibility = 'visible'
}

function sendSuccess(element, errorElement) {
    let parent = element.parentElement;
    parent.className = "input-container success";
    errorElement.style.visibility = 'hidden'
}

 
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isZipCode(zip) {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
}