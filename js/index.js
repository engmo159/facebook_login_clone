const passInput = document.querySelector('#passInput')
const passMessage = document.querySelector('#passMessage')
const passCheckBox = document.querySelector('#passCheckBox')
const iconSpan = document.querySelector('#iconSpan')
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const emailInput = document.querySelector('#emailInput')
const invalidSubmitDiv = document.querySelector('#invalidSubmitDiv')

let passwordValidation = false
// password events
passInput.addEventListener('focus', () => {
  passMessage.classList.remove('hidden')
})

passInput.addEventListener('keyup', e => {
  let password = e.target.value
  if (password.length >= 6) {
    passMessage.classList.replace('text-red-500', 'text-green-500')
    iconSpan.innerHTML = '✓'
    passwordValidation = true
  } else {
    passMessage.classList.replace('text-green-500', 'text-red-500')
    iconSpan.innerHTML = 'x'
    passwordValidation = false
  }
})

passInput.addEventListener('blur', () => {
  passMessage.classList.add('hidden')
})

// checkBox events
passCheckBox.addEventListener('click', () => {
  if (passCheckBox.checked) {
    passInput.setAttribute('type', 'text')
  } else {
    passInput.setAttribute('type', 'password')
  }
})

// handle form
const submitHandler = () => {
  if (passwordValidation && emailRegex.test(emailInput.value)) {
    return true
  } else {
    invalidSubmitDiv.classList.remove('hidden')
    return false
  }
}
