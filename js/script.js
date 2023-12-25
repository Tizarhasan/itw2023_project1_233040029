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
const scriptURL = 'https://script.google.com/macros/s/AKfycbw9Dh6aTnrAuLZ_gvbFV0aBGjQ5tyYLNn1teZtaV0v4sPYnIwxnMhxg93l1R1yqkCZs0w/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
