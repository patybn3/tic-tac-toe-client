'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const eventsPage = require('./events')

$(() => {
  $('#password-change').hide()
  $('#tray').hide()
  $('#logout').hide()
  $('#tictac').hide()
  $('#scores').hide()
  $('#settings').hide()

  $('#settings').on('click', eventsPage.onSettings)
  $('#start').on('click', eventsPage.onStart)
  $('#signup').on('submit', eventsPage.onSignUp)
  $('#login').on('submit', eventsPage.onLogIn)
  $('#password-change').on('submit', eventsPage.changePw)
  $('#logout').on('submit', eventsPage.onLogOut)
  $('.blocks').on('click', eventsPage.gameLogic)
  // your JS code goes here
})

// $('#0').on('click', eventsPage.gameBoard)
// $('#1').on('click', eventsPage.gameBoard)
// $('#2').on('click', eventsPage.gameBoard)
// $('#3').on('click', eventsPage.gameBoard)
// $('#4').on('click', eventsPage.gameBoard)
// $('#5').on('click', eventsPage.gameBoard)
// $('#6').on('click', eventsPage.gameBoard)
// $('#7').on('click', eventsPage.gameBoard)
// $('#8').on('click', eventsPage.gameBoard)
