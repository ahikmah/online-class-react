import React from 'react'
import '../assets/css/Login.css'
import googleIcon from '../assets/images/icon-google.png'

function Login() {
    return (
        <div>
            <div className="container">
                <form className="text-center" action="pages/all-schedule.html">

                    <h1 className="title">Login</h1>
                    <div className="form-group">
                        <label for="username">Username or Email</label>
                        <input type="text" name="username" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="text" name="password" className="form-control"/>
                    </div>

                    <a href="pages/reset-password.html" className="d-flex justify-content-end forgot-password">Forgot
                        password?</a>

                    <div className="form-group">
                        <button type="submit" className="btn btn-login">Login</button>
                        <button type="submit" className="btn btn-google">
                            <img src={googleIcon}/> Login with Google</button>
                    </div>

                    <div className="form-group">
                        <p className="register">New user? <a href="#">Register</a></p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
