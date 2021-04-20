import React, { useState, useRef, useEffect } from 'react';
import googleIcon from '../assets/images/icon-google.png';
import matchIcon from '../assets/images/match-icon.png';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/LoginRegister.css';
import FormFloating from '../component/FormFloating';
import ModalComp from '../component/ModalComp';

import { connect } from 'react-redux';
import { register } from '../redux/ActionCreators/auth';

function Register(props) {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [repassword, setRePassword] = useState();
    const [usernameIsTaken, setUsernameIsTaken] = useState(false);
    const [emailIsTaken, setEmailIsTaken] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [requiredTxt, setRequiredTxt] = useState(false);

    const { registerReducer, userRegister } = props;

    const usernameHandler = (e) => {
        setUsername(e.target.value);
        setUsernameIsTaken(false);
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        setEmailIsTaken(false);
    };
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };
    const rePasswordHandler = (e) => {
        setRePassword(e.target.value);
    };

    let history = useHistory();

    const regHandler = (e) => {
        e.preventDefault();
        if (password === repassword) {
            const dataUser = {
                username: username,
                email: email,
                password: password,
            };

            userRegister(dataUser);
        }
    };

    const ref = useRef();

    useEffect(() => {
        if (!ref.current) {
            ref.current = true;
        } else {
            if (registerReducer.isPending) {
                console.log('Loading');
            } else if (registerReducer.isFulfilled) {
                setModalShow(true);
            } else if (registerReducer.isRejected) {
                const conflict =
                    props.registerReducer.result.response.data.error.conflict;

                if (conflict === 'username') {
                    setUsernameIsTaken(true);
                } else if (conflict === 'email') {
                    setEmailIsTaken(true);
                } else {
                    setRequiredTxt(true);
                }
            }
        }
    }, [
        registerReducer.isFulfilled,
        registerReducer.isPending,
        registerReducer.isRejected,
        props,
    ]);

    // const registerHandler = (e) => {
    //     e.preventDefault();
    //     if (password === repassword) {
    //         const dataUser = {
    //             username: username,
    //             email: email,
    //             password: password,
    //         };
    //         axios
    //             .post('http://localhost:8000/data/auth', dataUser, {
    //                 headers: { 'Content-Type': 'application/json' },
    //             })
    //             .then((res) => {
    //                 setModalShow(true);
    //             })
    //             .catch((err) => {
    //                 if (err.response.data.conflict === 'username') {
    //                     setUsernameIsTaken(true);
    //                 } else if (err.response.data.conflict === 'email') {
    //                     setEmailIsTaken(true);
    //                 } else {
    //                     setRequiredTxt(true);
    //                 }
    //             });
    //     }
    // };

    let match;

    if (password === repassword && password && repassword) {
        match = true;
    } else if (password !== repassword && password && repassword) {
        match = false;
    }

    return (
        <div>
            <main className='container register text-center'>
                <h1 className='title register'>Register</h1>
                <form className='form register' action='#'>
                    <FormFloating
                        type='text'
                        id='username'
                        ph='username'
                        label='Username'
                        changed={usernameHandler}
                    />
                    {usernameIsTaken ? (
                        <small
                            className=' password d-flex justify-content-start'
                            style={{ color: 'red', marginTop: '-10px' }}
                        >
                            Username has already been taken.
                        </small>
                    ) : requiredTxt && !username ? (
                        <small
                            className=' password d-flex justify-content-start'
                            style={{ color: 'red', marginTop: '-10px' }}
                        >
                            Username is required
                        </small>
                    ) : null}
                    <FormFloating
                        type='email'
                        id='email'
                        ph='name@example.com'
                        label='Email'
                        changed={emailHandler}
                    />
                    {emailIsTaken ? (
                        <small
                            className=' password d-flex justify-content-start'
                            style={{ color: 'red', marginTop: '-10px' }}
                        >
                            Email has already been taken.
                        </small>
                    ) : requiredTxt && !email ? (
                        <small
                            className=' password d-flex justify-content-start'
                            style={{ color: 'red', marginTop: '-10px' }}
                        >
                            Email is required
                        </small>
                    ) : null}
                    <FormFloating
                        type='password'
                        id='password'
                        ph='Password'
                        label='Password'
                        autocomplete='current-password'
                        changed={passwordHandler}
                    />{' '}
                    {requiredTxt && !password ? (
                        <small
                            className=' password d-flex justify-content-start'
                            style={{ color: 'red', marginTop: '-10px' }}
                        >
                            Password is required
                        </small>
                    ) : null}
                    <FormFloating
                        type='password'
                        id='repassword'
                        ph='Re-type Password'
                        label='Confirm Password'
                        autocomplete='current-password'
                        changed={rePasswordHandler}
                    />
                    {match ? (
                        <small className='match password d-flex justify-content-start'>
                            Password match
                            <img src={matchIcon} alt='match icon' />
                        </small>
                    ) : match === undefined ? (
                        <small className='notmatch password d-flex justify-content-start'></small>
                    ) : (
                        <small className='notmatch password d-flex justify-content-start'>
                            Password not match
                        </small>
                    )}
                    <div className='button-group d-flex flex-column'>
                        <button
                            type='submit'
                            className='btn regis btn-primer'
                            onClick={regHandler}
                        >
                            Register
                        </button>
                        <button type='submit' className='btn regis btn-google'>
                            <img src={googleIcon} alt='google-icon' /> Register
                            with Google
                        </button>
                    </div>
                </form>
                <p className='txtregister'>
                    Already have account? <Link to='/'>Login</Link>
                </p>
            </main>
            <ModalComp
                header='Register Success'
                msg='your account has been successfully registered'
                show={modalShow}
                onHide={() => history.push('/')}
                variant='success'
                footermsg='Login Now'
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    const { registerReducer } = state;
    return {
        registerReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userRegister: (data) =>
            dispatch(register('http://localhost:8000/data/auth', data)),
    };
};

const ConnectedRegister = connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);

export default ConnectedRegister;
