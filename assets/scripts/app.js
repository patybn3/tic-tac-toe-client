'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const eventsPage = require('./events')

$(() => {
  $('#password-change').hide()

  $('#signup').on('submit', eventsPage.onSignUp)
  $('#login').on('submit', eventsPage.onLogIn)
  $('#password-change').on('submit', eventsPage.changePw)
  $('#settings').on('submit', eventsPage.settings)
  // your JS code goes here
})
