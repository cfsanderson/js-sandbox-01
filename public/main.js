const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const handleButtonClick = (event) => {
  console.log("Nice click!")
}

const main = () => {
  const buttons = $$('button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
}

document.addEventListener('DOMContentLoaded', main)
