// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', showFailureMsg: false, errorMsg: ''}

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSucess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showFailureMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {username: userName, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)

    if (response.ok === true) {
      this.onSubmitSucess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userName, password, showFailureMsg, errorMsg} = this.state

    return (
      <div className="outer-container">
        <div className="login-form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-img"
          />

          <div className="login-credentials-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="website-logo"
              alt="website logo"
            />

            <form className="form-details" onSubmit={this.onSubmitForm}>
              <label htmlFor="username" className="user-name-label">
                USERNAME
              </label>
              <input
                type="text"
                className="input-box"
                id="username"
                placeholder="Username"
                onChange={this.onChangeUserName}
                value={userName}
              />

              <label htmlFor="password" className="user-name-label">
                PASSWORD
              </label>
              <input
                type="password"
                className="input-box"
                id="password"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={password}
              />

              <button type="submit" className="submit-btn">
                Login
              </button>
              {showFailureMsg ? <p className="error-msg">*{errorMsg}</p> : ''}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
