// events page
const getForm = require('./../../lib/get-form-fields')
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file

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

  api.settingsGame()
    .then(ui.settingsSuccess)
    .catch(ui.settingsFail)
}

const onSettingsBack = event => {
  event.preventDefault()

  api.settingsGame()
    .then(ui.settingsBackSuccess)
    .catch(ui.settingsBackFail)
}

module.exports = {
  onSignUp,
  onLogIn,
  changePw,
  onLogOut,
  onSettings,
  onSettingsBack
}
