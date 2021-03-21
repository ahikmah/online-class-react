import React, { useState } from 'react'
import '../assets/css/ResetPassword.css'
import { Link, useHistory } from 'react-router-dom'
import FormFloating from '../component/FormFloating'
import FormCodeVerif from '../component/FormCodeVerif'
import matchIcon from '../assets/images/match-icon.png'
import changedIcon from '../assets/images/pw-changed.png'


function ResetPassword(props) {
    const [password, setPassword] = useState("")
    const [repassword, setRePassword] = useState("")


    let form = props.fc;
    let pwModal = props.pwChanged;
    let nextLink, formActive, formActive2, txtResend, match, pwLengthMsg, matchMsg;
    const pwModalClass = ['pw-changed','d-flex', 'text-center', 'flex-column', 'justify-content-evenly', 'align-items-center', 'hidden'];

    const passwordHandler= (e) => {
        setPassword(e.target.value)
    }
    const rePasswordHandler= (e) => {
        setRePassword(e.target.value)
    }

    // Is password matching?
    if(password === repassword && (password) && repassword){
        match = true
    } else if (password !== repassword && (password) && repassword){
        match = false
    }


    if(form===1){
        nextLink='/verify-code'
        formActive = <FormFloating type= "email" id= "email" ph= "email@example.com" label= "Email"/>
    } else if (form===2) {
        nextLink='/create-new-password'
        formActive = <FormCodeVerif type= "text" id= "verif-code" ph= "0" label= "Verifivation Code"/>
        txtResend =  <p className="txtresend">Didn’t receive a code?<Link to="/reset-password">Resend</Link></p>
    } else if (form===3 || form ===4){
        nextLink='/password-changed'
        formActive = <FormFloating type= "password" id= "password" ph= "New Password" label= "Password" changed={rePasswordHandler}/>
        pwLengthMsg = <small className="lenPwTxt password d-flex justify-content-start">Must be at least 8 character</small> 
        formActive2 = <FormFloating type= "password" id= "repassword" ph= "Confirmation Password" label= "Confirmation Password" changed={passwordHandler}/>
        matchMsg = match ? <small className="match password d-flex justify-content-start">Password match <img src= {matchIcon} alt="match icon"/></small> : match === undefined ? <small className="notmatch password d-flex justify-content-start"></small> : <small className="notmatch password d-flex justify-content-start">Password not match</small>
    }



    if(pwModal===true) pwModalClass.pop()

    let history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();
        history.push(nextLink);
    }

    return (
        <>
            <div className="container-fluid reset-pass" style={{padding: "0"}}>
                <div className="row text-center">
                    {/* <!-- image --> */}
                    <div className="col-6 left-panel">
                        <Link to="/" className="btn-back "><i className="fas fa-chevron-left "></i></Link>
                        <img src={props.ava} className="img-fluid" alt="avatar "/>
                    </div>

                    {/* <!-- reset form --> */}
                    <main className="col-6 right-panel flex-column container-fluid">
                        <h1 className="title reset ">{props.title}</h1>
                        <p className="msg1 ">{props.msg1}</p>
                        <p className='msg2'>{props.msg2}</p>
                        <form onSubmit={submitHandler} className="reset-form">
                           {formActive}
                           {pwLengthMsg}
                           {txtResend}
                           {formActive2}
                           {matchMsg}
                        
                            <button type="submit" className="btn btn-send btn-verify">{props.btnName}</button>
                        </form>

                        <div className={pwModalClass.join(" ")}>
                            <h3 className="txtPwChanged ">Password Changed!</h3>
                            <img className="changedIcon" src={changedIcon} alt="changed Icon" />
                            <Link className="txtLoginBack" to="/">Login to your account</Link>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
