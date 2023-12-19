//menu
const menuButton = document.querySelector('#menu')
const menu =  document.querySelectorAll('#menu div')
const nav = document.querySelector('nav')

function openMenu(e) {
    e.classList.toggle("change");
    menu.forEach(e => {
        e.classList.toggle('light-blue')
    })
    nav.classList.toggle('early')
  }

//form message
const scriptURL = 'https://script.google.com/macros/s/AKfycbw9KwHqdSw44sUmNakUPIJaHnMgRI-5yW9akr_Y6WKJC_tBu4OkXOoUUlKUbFIBs2C_/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
