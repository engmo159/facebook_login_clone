// all variables
const allLabels = document.querySelectorAll('label')
const allFaultDiv = document.querySelectorAll('.fault')
const allInputs = document.querySelectorAll('input')
const inputs = [
  'name',
  'lastName',
  'email',
  'phone',
  'password',
  'confPassword',
  'birthDate',
]
const myVariables = {}
inputs.forEach(input => {
  myVariables[`${input}FaultDiv`] = document.querySelector(`#${input}FaultDiv`)
  myVariables[`${input}Label`] = document.querySelector(`#${input}Label`)
  myVariables[`${input}Input`] = document.querySelector(`#${input}Input`)
})
const maleInput = document.querySelector('#maleInput')
const femaleInput = document.querySelector('#femaleInput')
const genderFaultDiv = document.querySelector('#genderFaultDiv')
const genderLabel = document.querySelector('#genderLabel')
// validation variable reg ex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

// submit function
const submitRegisterHandler = () => {
  clearErrors()
  // name

  if (
    myVariables['nameInput'].value.length < 6 ||
    !isNaN(myVariables['nameInput'].value)
  ) {
    myVariables['nameFaultDiv'].classList.remove('hidden')
    myVariables['nameLabel'].classList.add('hidden')
    return false
  }
  // last name
  else if (
    myVariables['lastNameInput'].value.length < 3 ||
    !isNaN(myVariables['lastNameInput'].value)
  ) {
    myVariables['lastNameFaultDiv'].classList.remove('hidden')
    myVariables['lastNameLabel'].classList.add('hidden')
    return false
  }
  // email
  else if (!emailRegex.test(myVariables['emailInput'].value)) {
    myVariables['emailFaultDiv'].classList.remove('hidden')
    myVariables['emailLabel'].classList.add('hidden')
    return false
  }
  // phone
  else if (!phoneRegex.test(myVariables['phoneInput'].value)) {
    myVariables['phoneFaultDiv'].classList.remove('hidden')
    myVariables['phoneLabel'].classList.add('hidden')
    return false
  }
  // password
  else if (myVariables['passwordInput'].value.length < 6) {
    myVariables['passwordFaultDiv'].classList.remove('hidden')
    myVariables['passwordLabel'].classList.add('hidden')
    return false
  }
  // password config
  else if (
    myVariables['confPasswordInput'].value !==
    myVariables['passwordInput'].value
  ) {
    myVariables['confPasswordFaultDiv'].classList.remove('hidden')
    myVariables['confPasswordLabel'].classList.add('hidden')
    return false
  }
  // gender
  else if (!maleInput.checked && !femaleInput.checked) {
    genderFaultDiv.classList.remove('hidden')
    genderLabel.classList.add('hidden')
    return false
  }
  // date
  else if (!myVariables['birthDateInput'].value) {
    birthDateFaultDiv.classList.remove('hidden')
    birthDateLabel.classList.add('hidden')
    return false
  }
}

// clear errors function
const clearErrors = () => {
  allLabels.forEach((label, index) => {
    label.classList.remove('hidden')
  })
  allFaultDiv.forEach((item, index) => {
    item.classList.add('hidden')
  })
}

// reset Function
const resetFunction = () => {
  clearErrors()
  allInputs.forEach((input, index) => {
    input.value = ''
  })
}
