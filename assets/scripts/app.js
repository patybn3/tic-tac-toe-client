'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const eventsPage = require('./events')

const eventsPageGame = require('./game/events')

$(() => {
  $('#password-change').hide()
  $('#tray').hide()
  $('#logout').hide()
  $('#tictac').hide()
  $('#scores').hide()
  // $('#settings').hide()
  $('#lookup-game').hide()
  $('#start-game').hide()

  // $('#settings').on('click', eventsPage.onSettings)
  $('#signup').on('submit', eventsPage.onSignUp)
  $('#login').on('submit', eventsPage.onLogIn)
  $('#password-change').on('submit', eventsPage.changePw)
  $('#logout').on('submit', eventsPage.onLogOut)
  // game starts here

  $('#tray').on('click', eventsPageGame.gameLogic)
  $('#start-game').on('click', eventsPageGame.onNewGame)
  $('#gamenumber').on('click', eventsPageGame.getGames)
  // your JS code goes here
})
//
// $(() => {
//   let currentPlayer = 'X'

//   $('#tray').on('click', function (event) {
//     $(event.target).text(currentPlayer)
//     currentPlayer = currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'
//   })
// })

// $('#0').on('click', eventsPage.gameBoard)
// $('#1').on('click', eventsPage.gameBoard)
// $('#2').on('click', eventsPage.gameBoard)
// $('#3').on('click', eventsPage.gameBoard)
// $('#4').on('click', eventsPage.gameBoard)
// $('#5').on('click', eventsPage.gameBoard)
// $('#6').on('click', eventsPage.gameBoard)
// $('#7').on('click', eventsPage.gameBoard)
// $('#8').on('click', eventsPage.gameBoard)
