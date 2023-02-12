const resultEl = document.getElementById('result')
const clipboardEl = document.getElementById('clipboard')
const lengthEl = document.getElementById('length')
const upperEl = document.getElementById('uppercase')
const lowerEl = document.getElementById('lowercase')
const numberEl = document.getElementById('number')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbols: getRandomSymbols
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if (!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowerEl.checked
    const hasUpper = upperEl.checked
    const hasNumber = numberEl.checked
    const hasSymbols = symbolsEl.checked

    resultEl.innerText = generatePassword( hasLower, hasNumber, hasSymbols, hasUpper,  length ) 
})

function generatePassword(lower, upper, number, symbols, length) {
    let generatePassword = ''
    const typeCount = lower + upper + number + length +symbols
    const typeArr = [{lower}, {upper}, {symbols}, {number},].filter(item => Object.value(item)[0])

    if (typeCount === 0) {
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatePassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatePassword.slice(0, length)

    return finalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbols() {
    const symbols = '!@#$%^&*(){}[]<>=,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
