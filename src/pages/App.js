// import '../App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import React, { Component } from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ResetPassword from '../pages/ResetPassword'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Route path='/' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/reset-password' exact component={ResetPassword} />
      </div>
        
      </BrowserRouter>
    )
  }
}

export default App

