import React, { useState } from 'react'
import googleIcon from '../assets/images/icon-google.png'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/LoginRegister.css'
import FormFloating from '../component/FormFloating'

function Login() {
    
    const [username, setUsername] = useState("")

    const loginHandler = (e)=>{
        setUsername(e.target.value)
    }


    return (
        <div>
            <main className="container text-center">
                <h1 className="title">Login</h1>
                <form className="form login" action="#">

                    <FormFloating type= "text" id= "username" ph= "email@example.com" label= "Username or Email" changed={loginHandler}/>
                    <FormFloating type= "password" id= "password" ph= "Password" label = "Password"/>

                    <Link to='/reset-password' className="d-flex justify-content-end forgot-password">Forgot password?</Link>

                    <div className="button-group d-flex flex-column">
                        <button type="submit" className="btn login btn-primer" onClick={loginHandler}>Login</button>
                        <button type="submit" className="btn login btn-google">
                            <img src={googleIcon} alt="google-icon"/> Login with Google</button>
                    </div>
                {/* <p>Tes: {username}</p> */}
                </form>
                <p className="txtlogin">New user? <Link to="/register"> Register</Link></p>

            </main>
        </div>
    )
}

export default Login
