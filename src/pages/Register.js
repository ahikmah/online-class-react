import React, { useState, useEffect } from 'react';
import googleIcon from '../assets/images/icon-google.png';
import matchIcon from '../assets/images/match-icon.png';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/LoginRegister.css';
import FormFloating from '../component/FormFloating';
import Axios from 'axios';

function Register() {
    useEffect(() => {
        Axios.get('http://localhost:8000/data/users').then((res) =>
            setuserList(res.data.result)
        );
    }, []);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');

    const [userList, setuserList] = useState();

    const [usernameIsTaken, setUsernameIsTaken] = useState(false);
    const [emailIsTaken, setEmailIsTaken] = useState(false);

    const checkUsername = async () => {
        try {
            const usernameCheck = await userList.findIndex(
                (x) => x.username === username
            );

            if (usernameCheck !== -1) setUsernameIsTaken(true);
        } catch (err) {
            // console.log(err);
        }
    };
    const checkEmail = async () => {
        try {
            const emailCheck = await userList.findIndex(
                (x) => x.email === email
            );

            if (emailCheck !== -1) setEmailIsTaken(true);
        } catch (err) {
            // console.log(err);
        }
    };

    checkUsername();
    checkEmail();

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

    const registerHandler = (e) => {
        if (!usernameIsTaken && !emailIsTaken) {
            e.preventDefault();
            const dataUser = {
                username: username,
                email: email,
                password: password,
            };

            Axios.post('http://localhost:8000/data/users', dataUser, {
                headers: { 'Content-Type': 'application/json' },
            })
                .then((res) => {
                    // console.log(res.data);
                    history.push('/');
                    alert('your account has been successfully registered');
                })
                .catch((err) => {
                    // console.log(dataUser);
                    console.log(err.response.data);
                });
        }
    };

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
                    ) : null}
                    <FormFloating
                        type='password'
                        id='password'
                        ph='Password'
                        label='Password'
                        changed={passwordHandler}
                    />
                    <FormFloating
                        type='password'
                        id='repassword'
                        ph='Re-type Password'
                        label='Confirm Password'
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
                            onClick={registerHandler}
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
        </div>
    );
}

export default Register;
