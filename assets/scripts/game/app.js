'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const eventsPage = require('./events')

$(() => {
  $('.blocks').on('click', eventsPage.gameLogic)
  $('#start-game').on('click', eventsPage.onStart)
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
