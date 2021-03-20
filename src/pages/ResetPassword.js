import React from 'react'
import ResetPasswordTemplate from '../templates/ResetPasswordTemp'
import Ava1 from '../assets/images/ava-reset-password.png'

function ResetPassword() {
    return (
        <div>
            <ResetPasswordTemplate
            ava = {Ava1}
            title = 'Reset Password'
            msg1 = 'Enter your email address linked to this account.'
            msg2 = 'We will send you the verification code to reset your password'
            fc = {1}
            btnName = 'Send'
            pwChanged = {false}
            />
        </div>
    )
}

export default ResetPassword

