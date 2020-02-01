// events page
const getForm = require('./../../lib/get-form-fields')
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file
const store = require('./store')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onLogIn = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.logIn(data)
    .then(ui.logInSuccess)
    .catch(ui.logInFail)
}

const changePw = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.onChange(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFail)
}

const onLogOut = event => {
  event.preventDefault()

  api.logingOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFail)
}

const onSettings = event => {
  event.preventDefault()

  api.startGame()
    .then(ui.settingsSuccess)
    .catch(ui.settingsFail)
}
// game starts here
//
//
// let playerOne = 0
//
// const gameLogic = event => {
//   if ($(event.target).text() === '' && playerOne % 2 !== 0 && store.game.cell.over === false) {
//     $(store.user.player).text('X')
//     playerOne = 0
//   } else if ($(event.target).text() === '' && playerOne % 2 === 0 && store.game.cell.over === false) {
//     $(event.target).text('O')
//     playerOne = 1
//   }
// }

const onStart = event => {
  event.preventDefault()
  playerOne = 0
  const form = event.target
  const data = getForm(form)

  api.startGame(data)
    .then(ui.startSuccess)
    .catch(ui.startFail)
}

const gameLogic = function () {
  let box = $(event.target).data('id')
  if (box.innerHTML !== '' && box.innerHTML === )
}

module.exports = {
  onSignUp,
  onLogIn,
  changePw,
  onLogOut,
  onStart,
  gameLogic,
  onSettings
}
