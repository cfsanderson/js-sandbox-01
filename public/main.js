const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const handleButtonClick = (event) => {
  console.log('clicked:', event.srcElement.id)
}

const main = () => {
// this works for ALL the buttons...
  const aButtons = $$('a')
  for (let i = 0; i < aButtons.length; i++) {
    aButtons[i].addEventListener('click', handleButtonClick)
  }

// This works for individual buttons...
  // const firstButton = document.getElementById('first-button')
  // firstButton.addEventListener('click', handleButtonClick)
  //
  // const secondButton = document.getElementById('second-button')
  // secondButton.addEventListener('click', handleButtonClick)
}

document.addEventListener('DOMContentLoaded', main)
