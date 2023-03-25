const passwordEl = document.getElementById("Password");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("upper");
const lowercaseEl = document.getElementById("lower");
const numbersEl = document.getElementById("number");
const symbolsEl  = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const copyEl = document.getElementById("copy")

const uppercaseLettes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^^&*()_+=-";

function getUppercase() {
    return uppercaseLettes[Math.floor(Math.random() *uppercaseLettes.length)];
};
function getLowercase() {
    return lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)];
};
function getNumbers() {
return numbers[Math.floor(Math.random() * numbers.length)];
};
function getSymbols() {
    return symbols[Math.floor(Math.random()*symbols.length)];
};

function generatePassword() {
    const length = lengthEl.value;

    let password = "";

    if(uppercaseEl.checked) {
        password += getUppercase();
    }
    if(lowercaseEl.checked) {
      password += getLowercase();
    }
    if(numbersEl.checked) {
       password += getNumbers();
    }
    if(symbolsEl.checked) {
        password += getSymbols();
    }

    for(let i=password.length; i<length; i++){
        const x = generateX();
        password += x;
    }

    passwordEl.innerText = password;
}

function generateX() {
    const xs = [];
    if(uppercaseEl.checked) {
        xs.push(getUppercase());
    }
    if(lowercaseEl.checked) {
        xs.push(getLowercase());
    }
    if(numbersEl.checked) {
        xs.push(getNumbers());
    }
    if(symbolsEl.checked) {
        xs.push(getSymbols());
    }
    if (xs.length === 0) return"";
    return xs[Math.floor(Math.random()* xs.length)];
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
    const textarea = document.createElement("textarea");
    const password = passwordEl.innerText;

    if(!password){
        return
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});