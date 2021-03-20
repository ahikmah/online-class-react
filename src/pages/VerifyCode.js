import React from 'react'
import ResetPasswordTemplate from '../templates/ResetPasswordTemp'
import Ava2 from '../assets/images/ava-reset-password2.png'

function VerifyCode() {
    return (
        <div>
            <ResetPasswordTemplate
            ava = {Ava2}
            title = 'Reset Password'
            msg1 = 'Enter verification code we just sent to your email address'
            msg2 = {null}
            fc = {2}
            btnName = 'Verify'
            pwChanged = {false}
            />
        </div>
    )
}

export default VerifyCode
