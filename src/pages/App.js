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
          <Route path='/fas-dashboard' exact component={DashboardFasilitator}/>

          {/* Activity page */}
          <Route path='/student-activity' exact component={StudentActivity}/>
          <Route path='/student-myclass' exact component={StudentMyClass}/>

          <Route path='/student-class-detail/:id' exact component={StudentClassDetail}/>

          
          <Route path='/fas-activity' exact component={FasilitatorActivity}/>
          {/* <Route path='/student-classdetail' exact component={StudentClassDetail}/> */}
          {/* <Route path='/student-classprogress' exact component={StudentClassProgress}/> */}
          {/* <Route path='/student-my-class' exact component={Acivity}/>
          <Route path='/student-class-detail' exact component={Acivity}/>
          <Route path='/student-class-progress' exact component={Acivity}/>

          <Route path='/fas-activity' exact component={Acivity}/>
          <Route path='/fas-class-detail' exact component={Acivity}/>
          <Route path='/fas-class-member' exact component={Acivity}/>
          <Route path='/fas-scoring' exact component={Acivity}/> */}

          {/* Profile */}
          {/* <Route path='/profile' exact component={Profile}/> */}

          {/* Notification */}
          {/* <Route path='/notif' exact component={Notify}/> */}
        
      </BrowserRouter>
    )
  }
}

export default App

