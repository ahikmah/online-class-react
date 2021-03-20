// import '../App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import React, { Component } from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ResetPassword from './ResetPassword'
import VerifyCode from './VerifyCode'
import CreateNewPassword from './CreateNewPassword'
import PasswordChanged from './PasswordChanged'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Route path='/' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/reset-password' exact component={ResetPassword} />
          <Route path='/verify-code' exact component={VerifyCode} />
          <Route path='/create-new-password' exact component={CreateNewPassword} />
          <Route path='/password-changed' exact component={PasswordChanged} />
      </div>
        
      </BrowserRouter>
    )
  }
}

export default App

