import React, { useState } from 'react'
import googleIcon from '../assets/images/icon-google.png'
import {Link, useHistory} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/LoginRegister.css'
import FormFloating from '../component/FormFloating'

function Login() {
    
    const [username, setUsername] = useState("")

    const loginHandler = (e)=>{
        setUsername(e.target.value)
    }



    let history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();
        history.push('/dashboard/all-schedule');
    }


    return (
        <>
            <main className="container login text-center">
                <h1 className="title">Login</h1>
                <form className="form login" onSubmit={submitHandler}>

                    <FormFloating type= "text" id= "username" ph= "email@example.com" label= "Username or Email" changed={loginHandler}/>
                    <FormFloating type= "password" id= "password" ph= "Password" label = "Password"/>

                    <Link to='/reset-password' className="d-flex justify-content-end forgot-password">Forgot password?</Link>

                    <div className="button-group d-flex flex-column">
                        <button type="submit" className="btn login btn-primer" onClick={loginHandler}>Login</button>
                        <button type="submit" className="btn login btn-google">
                            <img src={googleIcon} alt="google-icon"/> Login with Google</button>
                    </div>
                <p className="hidden">Tes: {username}</p>
                </form>
                <p className="txtlogin">New user? <Link to="/register"> Register</Link></p>

            </main>
        </>
    )
}

export default Login
