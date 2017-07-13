const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

// use "$('body').className = 'modal'" to change to the modal.

const handleButtonClick = (event) => {
  console.log('clicked:', event.srcElement.id)
}

const main = () => {
// this works for ALL the buttons...
  const aButtons = $$('a')
  for (let i = 0; i < aButtons.length; i++) {
    aButtons[i].addEventListener('click', handleButtonClick)
  }

// can access lesson names with
// console.log(lessons.lesson02.title)

// This works for individual buttons...
  // const firstButton = document.getElementById('first-button')
  // firstButton.addEventListener('click', handleButtonClick)
  //
  // const secondButton = document.getElementById('second-button')
  // secondButton.addEventListener('click', handleButtonClick)
}

document.addEventListener('DOMContentLoaded', main)

// Lesson object
const lessons = {
  "lesson01": {
    "title": "Lesson #1: Variables",
    "url" : "https://youtu.be/le-URjBhevE?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson02": {
    "title": "Lesson #2: Data Types",
    "url" : "https://youtu.be/808eYu9B9Yw?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson03": {
    "title": "Lesson #3: Numbers",
    "url" : "https://youtu.be/nBEBraDJkFg?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson04": {
    "title": "Lesson #4: String Basics",
    "url" : "https://youtu.be/Vd_Z1bYGrCM?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson05": {
    "title": "Lesson #5: Strings; [bracket-notation]",
    "url" : "https://youtu.be/sPmRfjJdg5Y?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson06": {
    "title": "Lesson #6: 20 String Methods in 7 Minutes",
    "url" : "https://youtu.be/VRz0nbax0uI?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson07": {
    "title": "Lesson #7: Functions",
    "url" : "https://youtu.be/R8SjM4DKK80?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson08": {
    "title": "Lesson #8: Hoisting",
    "url": "https://youtu.be/C1PZh_ea-7I?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson09": {
    "title": "Lesson #9: Comparison Operators & If Else",
    "url": "https://youtu.be/7WkfzokHGqo?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson10": {
    "title": "Lesson #10: == vs ===",
    "url": "https://youtu.be/kVOmc7NK1M0?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson11": {
    "title": "Lesson #11: Null vs Undefined",
    "url": "https://youtu.be/VwaqJy_clnc?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson12": {
    "title": "Lesson #12: Logical Operators && TRICKS with Short-Circuit Evaluation",
    "url": "https://youtu.be/r7v6EIiHfVA?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson13": {
    "title": "Lesson #13: Ternary Operator",
    "url": "https://youtu.be/s4sB1hm73tw?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson14": {
    "title": "Lesson #14: Switch Statements",
    "url": "https://youtu.be/fM5qnyasUYI?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson15": {
    "title": "Lesson #15: Arrays",
    "url": "https://youtu.be/QEZXbRiaY1I?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  },
  "lesson16": {
    "title": "Lesson #16; Common Array Methods",
    "url": "https://youtu.be/MeZVVxLn26E?list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5"
  }
}
