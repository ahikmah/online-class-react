import React, { useState } from 'react'
import googleIcon from '../assets/images/icon-google.png'
import matchIcon from '../assets/images/match-icon.png'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/LoginRegister.css'
import FormFloating from '../component/FormFloating'

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRePassword] = useState("")

    const usernameHandler= (e) => {
        setUsername(e.target.value)
    }

    const emailHandler= (e) => {
        setEmail(e.target.value)
    }
    const passwordHandler= (e) => {
        setPassword(e.target.value)
    }
    const rePasswordHandler= (e) => {
        setRePassword(e.target.value)
    }

    let match;

    if(password === repassword && (password) && repassword){
        match = true
    } else if (password !== repassword && (password) && repassword){
        match = false
    }

    return (
        <div>
            <main className="container text-center">
                <h1 className="title">Register</h1>
                <form className="form login" action="#">

                    <FormFloating type= "text" id= "username" ph= "username" label= "Username" changed={usernameHandler}/>
                    <FormFloating type= "email" id= "email" ph= "name@example.com" label= "Email" changed={emailHandler}/>
                    <FormFloating type= "password" id= "password" ph= "Password" label = "Password"  changed={passwordHandler}/>
                    <FormFloating type= "password" id= "password" ph= "Re-type Password" label = "Confirm Password" changed={rePasswordHandler}/>
                    
                    {match ? <small className="match password d-flex justify-content-start">Password match <img src= {matchIcon}/></small> : match === undefined ? <small className="notmatch password d-flex justify-content-start"></small> : <small className="notmatch password d-flex justify-content-start">Password not match</small>}

                    <div className="button-group d-flex flex-column">
                        <button type="submit" className="btn btn-primer" onClick={usernameHandler}>Register</button>
                        <button type="submit" className="btn btn-google">
                            <img src={googleIcon} alt="google-icon"/> Register with Google</button>
                    </div>
                {/* <p>Tes: {username}</p> */}
                </form>
                <p className="txtregister">Already have account? <Link to="/">Login</Link></p>

            </main>
        </div>
    )
}

export default Register

