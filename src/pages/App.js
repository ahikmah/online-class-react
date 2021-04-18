// import '../App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import React, { useState } from 'react';

import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from './ResetPassword';
import VerifyCode from './VerifyCode';
import CreateNewPassword from './CreateNewPassword';
import PasswordChanged from './PasswordChanged';

import Dashboard from './Dashboard';
import DashboardStudent from '../component/DashboardStudent';
import DashboardFasilitator from '../component/DashboardFasilitator';

import Activity from './Activity';

import StudentActivity from '../component/StudentActivity';
import StudentMyClass from './StudentMyClass';
import StudentClassDetail from './StudentClassDetail';

import FasilitatorActivity from '../component/FasilitatorActivity';
import FacilitatorMyClass from './FacilitatorMyClass';
import FasilitatorClassDetail from './FasilitatorClassDetail';

import Profile from './Profile';

import PrivateRoute from '../component/PrivateRoute';
import PrivateRouteAuth from '../component/PrivateRouteAuth';

function App() {
    const [isLogin, setIsLogin] = useState(false);

    const onClickAuth = () => {
        setIsLogin(!isLogin);
    };
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path='/' exact component={Login} /> */}
                <PrivateRouteAuth
                    path='/'
                    exact
                    Component={Login}
                    isLogin={isLogin}
                    onClickAuth={onClickAuth}
                />
                {/* <Route path='/register' component={Register} /> */}
                <PrivateRouteAuth
                    path='/register'
                    exact
                    Component={Register}
                    isLogin={isLogin}
                    onClickAuth={onClickAuth}
                />
                {/* <Route path='/reset-password' component={ResetPassword} /> */}
                <PrivateRouteAuth
                    path='/reset-password'
                    exact
                    Component={ResetPassword}
                    isLogin={isLogin}
                    onClickAuth={onClickAuth}
                />

                {/* <Route path='/verify-code' component={VerifyCode} /> */}
                <PrivateRouteAuth
                    path='/verify-code'
                    exact
                    Component={VerifyCode}
                    isLogin={isLogin}
                    onClickAuth={onClickAuth}
                />
                {/* <Route
                    path='/create-new-password'
                    component={CreateNewPassword}
                /> */}
                <PrivateRouteAuth
                    path='/create-new-password'
                    exact
                    Component={CreateNewPassword}
                    isLogin={isLogin}
                    onClickAuth={onClickAuth}
                />
                {/* <Route path='/password-changed' component={PasswordChanged} /> */}
                <PrivateRouteAuth
                    path='/password-changed'
                    exact
                    Component={PasswordChanged}
                    isLogin={isLogin}
                    onClickAuth={onClickAuth}
                />

                {/* Dashboard page */}

                <PrivateRoute
                    path='/dashboard'
                    isLogin={isLogin}
                    Component={Dashboard}
                />
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
                    path='/activity'
                    isLogin={isLogin}
                    Component={Activity}
                />
                <PrivateRoute
                    path='/student/activity'
                    isLogin={isLogin}
                    Component={StudentActivity}
                />
                <PrivateRoute
                    path='/facilitator/activity'
                    isLogin={isLogin}
                    Component={FasilitatorActivity}
                />

                <PrivateRoute
                    path='/student/my-class/'
                    isLogin={isLogin}
                    exact
                    Component={StudentMyClass}
                />
                <PrivateRoute
                    path='/facilitator/my-class/'
                    isLogin={isLogin}
                    Component={FacilitatorMyClass}
                />

                <PrivateRoute
                    path='/student/class-detail/:id'
                    isLogin={isLogin}
                    Component={StudentClassDetail}
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
