import React from 'react'
import '../assets/css/ResetPassword.css'
import ava from '../assets/images/ava-reset-password.png'

function ResetPassword() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row text-center">
                    {/* <!-- image --> */}
                    <div className="col left-panel">
                        <a href="../index.html " className="btn-back "><i className="fas fa-chevron-left "></i></a>
                        <img src={ava} className="img-fluid" alt="avatar "/>
                    </div>

                    {/* <!-- reset form --> */}
                    <div className="col right-panel flex-column">
                        <h1 className="title ">Reset Password</h1>
                        <p className="msg1 ">Enter your email address linked to this account.</p>
                        <p className='msg2'>We will send you the verification code to reset your password </p>
                        <form action="../index.html" className="reset-form">
                            <div className="form-group">
                                <label for="email ">Email</label>
                                <input type="email " className="form-control " name="email "/>
                            </div>
                            <div className="form-group">
                                <button type="submit " className="btn btn-send ">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
