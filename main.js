const pwInput = document.querySelector("#password");
const confirmPW = document.querySelector('#confirm');
const charLength = document.querySelector("#length");
const upperCase = document.querySelector("#uppercase");
const lowerCase = document.querySelector("#lowercase");
const number = document.querySelector("#number");

pwInput.addEventListener('focus', () => {
    document.querySelector('.message').classList.add('active');
});

pwInput.addEventListener('blur', () => {
    document.querySelector('.message').classList.remove('active');
});

pwInput.addEventListener('keyup', () => {
    //validate lowercase letters
    const lowerCaseLetters = /[a-z]/g;
    if (pwInput.value.match(lowerCaseLetters)) {
        lowerCase.classList.remove('invalid');
        lowerCase.classList.add('valid');
    } else {
        lowerCase.classList.remove('valid');
        lowerCase.classList.add('invalid');
    };
    //validate capital letters
    const upperCaseLetters = /[A-Z]/g;
    if (pwInput.value.match(upperCaseLetters)) {
        upperCase.classList.remove('invalid');
        upperCase.classList.add('valid');
    } else {
        upperCase.classList.remove('valid');
        upperCase.classList.add('invalid');
    };
    //validate numbers
    const numbers = /[0-9]/g;
    if (pwInput.value.match(numbers)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
    } else {
        number.classList.remove('valid');
        number.classList.add('invalid');
    };
    //validate character length
    if (pwInput.value.length >= 8) {
        charLength.classList.remove('invalid');
        charLength.classList.add('valid');
    } else {
        charLength.classList.remove('valid');
        charLength.classList.add('invalid');
    };
});

//Match password feature
function validatePassword() {
    if ((pwInput.value !== '' && confirmPW.value !== '') && pwInput.value !== confirmPW.value) { //If both fields are not empty + they don't match
        confirmPW.setCustomValidity("Please enter a matching password");
        document.querySelector('.mismatch').classList.add("active");

    } else {
        confirmPW.setCustomValidity("");
        document.querySelector('.mismatch').classList.remove("active"); //If either field is empty OR (both are filled + they match)
    };
};

pwInput.addEventListener('keyup', validatePassword);
confirmPW.addEventListener('keyup', validatePassword);