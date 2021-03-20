import React from 'react'
import '../assets/css/ResetPassword.css'
import {Link, Redirect} from 'react-router-dom'
import FormFloating from '../component/FormFloating'
import FormCodeVerif from '../component/FormCodeVerif'

function ResetPassword(props) {
    let form = props.fc;
    let pwModal = props.pwChanged;
    let nextLink;
    const pwModalClass = ['pw-changed', 'hidden'];

    if(form===1){
        nextLink='/verify-code'
    } else if (form===2) {
        nextLink='/create-new-password'
    }
    if(pwModal===true) pwModalClass.pop()

    const Submit = () => {
        return <Redirect to={nextLink} push/>
    }

    return (
        <div>
            <div className="container-fluid ">
                <div className="row text-center">
                    {/* <!-- image --> */}
                    <div className="col left-panel">
                        <Link to="/" className="btn-back "><i className="fas fa-chevron-left "></i></Link>
                        <img src={props.ava} className="img-fluid" alt="avatar "/>
                    </div>

                    {/* <!-- reset form --> */}
                    <main className="col right-panel flex-column container-fluid">
                        <h1 className="title reset ">{props.title}</h1>
                        <p className="msg1 ">{props.msg1}</p>
                        <p className='msg2'>{props.msg2}</p>
                        <form onSubmit={Submit} className="reset-form">
                           {form===1 ? <FormFloating type= "email" id= "email" ph= "email@example.com" label= "Email"/>:null}
                           {form===2 ? <FormCodeVerif type= "text" id= "verif-code" ph= "0" label= "Verifivation Code"/>:null}
                           {form===2 ? <p className="txtresend">Didn’t receive a code?<Link to="/reset-password">Resend</Link></p>:null}
                           {form===3 ? <FormFloating type= "password" id= "password" ph= "New Password" label= "Password"/>:null}
                           {form===3 ? <FormFloating type= "password" id= "repassword" ph= "Confirmation Password" label= "Password"/> :null}
                            <button type="submit" className="btn btn-send btn-verify">{props.btnName}</button>
                        </form>

                        <div className={pwModalClass}>

                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
