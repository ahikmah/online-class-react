// import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';

import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from './ResetPassword';
import VerifyCode from './VerifyCode';
import CreateNewPassword from './CreateNewPassword';
import PasswordChanged from './PasswordChanged';

import DashboardStudent from './DashboardStudent';
import DashboardFasilitator from './DashboardFasilitator';

import StudentActivity from './StudentActivity';
import StudentMyClass from './StudentMyClass';
import StudentClassDetail from './StudentClassDetail';

import FasilitatorActivity from './FasilitatorActivity';
import FacilitatorMyClass from './FacilitatorMyClass';
import FasilitatorClassDetail from './FasilitatorClassDetail';

import Profile from './Profile';

import PrivateRoute from '../component/PrivateRoute';

function App() {
    const [isLogin, setIsLogin] = useState(true);

    const onClickAuth = () => {
        setIsLogin(true);
    };
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/reset-password' component={ResetPassword} />
                <Route path='/verify-code' component={VerifyCode} />
                <Route
                    path='/create-new-password'
                    component={CreateNewPassword}
                />
                <Route path='/password-changed' component={PasswordChanged} />

                {/* Dashboard page */}

                <PrivateRoute
                    path='/student/dashboard/:id?'
                    isLogin={isLogin}
                    Component={DashboardStudent}
                />

                <PrivateRoute
                    path='/facilitator/dashboard'
                    isLogin={isLogin}
                    Component={DashboardFasilitator}
                />

                {/* Activity page */}

                <PrivateRoute
                    path='/student/activity/'
                    isLogin={isLogin}
                    Component={StudentActivity}
                />
                <PrivateRoute
                    path='/student/my-class/'
                    isLogin={isLogin}
                    exact
                    Component={StudentMyClass}
                />

                <PrivateRoute
                    path='/student/class-detail/:id'
                    isLogin={isLogin}
                    Component={StudentClassDetail}
                />

                <PrivateRoute
                    path='/facilitator/activity'
                    isLogin={isLogin}
                    Component={FasilitatorActivity}
                />
                <PrivateRoute
                    path='/facilitator/my-class/'
                    isLogin={isLogin}
                    Component={FacilitatorMyClass}
                />
                <PrivateRoute
                    path='/facilitator/class-detail/:id'
                    isLogin={isLogin}
                    exact
                    Component={FasilitatorClassDetail}
                />
                <PrivateRoute
                    path='/facilitator/class-detail/member/:id'
                    isLogin={isLogin}
                    exact
                    Component={FasilitatorClassDetail}
                />
                <PrivateRoute
                    path='/profile'
                    isLogin={isLogin}
                    exact
                    Component={Profile}
                />

                {/* <Route path='/student/activity/' component={StudentActivity} /> */}
                {/* <Route
                    path='/student/my-class/'
                    exact
                    component={StudentMyClass}
                /> */}
                {/* <Route
                    path='/student/class-detail/:id'
                    component={StudentClassDetail}
                /> */}

                {/* <Route
                    path='/facilitator/activity'
                    component={FasilitatorActivity}
                /> */}

                {/* <Route
                    path='/facilitator/my-class/'
                    exact
                    component={FacilitatorMyClass}
                /> */}

                {/* <Route
                    path='/facilitator/class-detail/:id'
                    exact
                    component={FasilitatorClassDetail}
                /> */}

                {/* <Route
                    path='/facilitator/class-detail/member/:id'
                    exact
                    component={FasilitatorClassDetail}
                /> */}

                {/* <Route path='/student/profile' component={Profile} />
                <Route path='/facilitator/profile' component={Profile} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default App;
