import React from 'react'
import ResetPasswordTemplate from '../templates/ResetPasswordTemp'
import Ava2 from '../assets/images/ava-reset-password2.png'

function PasswordChanged() {
    return (
        <div>
            <ResetPasswordTemplate
            ava = {Ava2}
            title = 'Create New Password'
            msg1 = {null}
            msg2 = 'Your new password must be different from previous used password!'
            fc = {4}
            btnName = 'Create'
            pwChanged = {true}
            />
        </div>
    )
}

export default PasswordChanged
