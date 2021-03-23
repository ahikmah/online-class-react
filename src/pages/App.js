// import '../App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import React, { Component } from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ResetPassword from './ResetPassword'
import VerifyCode from './VerifyCode'
import CreateNewPassword from './CreateNewPassword'
import PasswordChanged from './PasswordChanged'

import DashboardStudent from './DashboardStudent'
import DashboardFasilitator from './DashboardFasilitator'

import StudentActivity from './StudentActivity'
import StudentMyClass from './StudentMyClass'
import StudentClassDetail from './StudentClassDetail'

import FasilitatorActivity from './FasilitatorActivity'
import FasilitatorClassDetail from './FasilitatorClassDetail'

import Profile from './Profile'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path='/' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/reset-password' exact component={ResetPassword} />
          <Route path='/verify-code' exact component={VerifyCode} />
          <Route path='/create-new-password' exact component={CreateNewPassword} />
          <Route path='/password-changed' exact component={PasswordChanged} />


          {/* Dashboard page */}
          <Route path='/dashboard/:id' exact component={DashboardStudent}/>
          <Route path='/dashboard/all-schedule/:id' exact component={DashboardStudent}/>
          <Route path='/dashboard/for-you/:id' exact component={DashboardStudent}/>
          <Route path='/fas-dashboard' exact component={DashboardFasilitator}/>

          {/* Activity page */}
          <Route path='/student-activity' exact component={StudentActivity}/>
          <Route path='/student-activity/:nt' exact component={StudentActivity}/>
          <Route path='/student-myclass/' exact component={StudentMyClass}/>
          <Route path='/student-myclass/:nt' exact component={StudentMyClass}/>
          <Route path='/student-class-detail/:id' exact component={StudentClassDetail}/>
          <Route path='/student-class-detail/:id/:id' exact component={StudentClassDetail}/>


          <Route path='/fas-class-detail/:id' exact component={FasilitatorClassDetail}/>
          <Route path='/fas-class-detail/:id:/:id' exact component={FasilitatorClassDetail}/>

          
          <Route path='/fas-activity' exact component={FasilitatorActivity}/>
          <Route path='/fas-class-detail/member/:id' exact component={FasilitatorClassDetail}/>


          <Route path='/profile' exact component={Profile}/>
          <Route path='/profile/:nt' exact component={Profile}/>

      </BrowserRouter>
    )
  }
}

export default App

