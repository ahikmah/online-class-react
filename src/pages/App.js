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
import FasilitatorActivity from '../component/FasilitatorActivity';

import MyClass from './MyClass';
import StudentMyClass from '../component/StudentMyClass';
import FacilitatorMyClass from '../component/FacilitatorMyClass';

import StudentClassDetail from './StudentClassDetail';

import FasilitatorClassDetail from './FasilitatorClassDetail';

import Profile from './Profile';

import PrivateRoute from '../component/PrivateRoute';
import PrivateRouteAuth from '../component/PrivateRouteAuth';
import PrivateRouteStudent from '../component/PrivateRouteStudent';
import PrivateRouteFacilitator from '../component/PrivateRouteFacilitator';

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
                <PrivateRouteStudent
                    path='/student/dashboard/:id?'
                    isLogin={isLogin}
                    Component={DashboardStudent}
                />

                <PrivateRouteFacilitator
                    path='/facilitator/dashboard/'
                    isLogin={isLogin}
                    Component={DashboardFasilitator}
                />

                {/* Activity page */}

                <PrivateRoute
                    path='/activity'
                    isLogin={isLogin}
                    Component={Activity}
                />
                <PrivateRouteStudent
                    path='/student/activity'
                    isLogin={isLogin}
                    Component={StudentActivity}
                />
                <PrivateRouteFacilitator
                    path='/facilitator/activity'
                    isLogin={isLogin}
                    Component={FasilitatorActivity}
                />

                <PrivateRoute
                    path='/my-class'
                    isLogin={isLogin}
                    exact
                    Component={MyClass}
                />
                <PrivateRouteStudent
                    path='/student/my-class/'
                    isLogin={isLogin}
                    exact
                    Component={StudentMyClass}
                />
                <PrivateRouteFacilitator
                    path='/facilitator/my-class/'
                    isLogin={isLogin}
                    Component={FacilitatorMyClass}
                />

                <PrivateRouteFacilitator
                    path='/student/class-detail/:id/:course'
                    isLogin={isLogin}
                    Component={StudentClassDetail}
                />

                <PrivateRouteFacilitator
                    path='/facilitator/class-detail/:id/:course'
                    isLogin={isLogin}
                    exact
                    Component={FasilitatorClassDetail}
                />

                <PrivateRouteFacilitator
                    path='/facilitator/class-detail/member/:course/:user'
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
