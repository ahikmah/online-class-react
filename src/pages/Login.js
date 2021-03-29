import React, { useState, useEffect } from 'react';
import googleIcon from '../assets/images/icon-google.png';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/LoginRegister.css';
import FormFloating from '../component/FormFloating';
import Axios from 'axios';
var md5 = require('md5');

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userList, setuserList] = useState();

    useEffect(() => {
        Axios.get('http://localhost:8000/data/users').then((res) =>
            setuserList(res.data.result)
        );
    }, []);

    console.log(userList);
    const changeHandler = (e) => {
        setUsername(e.target.value);
    };
    const changeHandler2 = (e) => {
        setPassword(e.target.value);
    };

    let history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        const index = userList.findIndex((x) => x.username === username);
        console.log('index', index);
        if (index !== -1) {
            if (
                username === userList[index].username &&
                md5(password) === userList[index].password
            ) {
                history.push('/dashboard/all-schedule/');
            } else {
                alert('Wrong Username or Password!');
            }
        } else {
            alert('Wrong Username or Password!');
        }
    };

    return (
        <>
            <main className='container login'>
                <h1 className='title login'>Login</h1>
                <form className='form login' onSubmit={submitHandler}>
                    <FormFloating
                        type='text'
                        id='username'
                        ph='email@example.com'
                        label='Username or Email'
                        changed={changeHandler}
                    />
                    <FormFloating
                        type='password'
                        id='password'
                        ph='Password'
                        label='Password'
                        changed={changeHandler2}
                    />

                    <Link
                        to='/reset-password'
                        className='d-flex justify-content-end forgot-password'
                    >
                        Forgot password?
                    </Link>

                    <div className='button-group d-flex flex-column'>
                        <button type='submit' className='btn login btn-primer'>
                            Login
                        </button>
                        <button type='submit' className='btn login btn-google'>
                            <img src={googleIcon} alt='google-icon' /> Login
                            with Google
                        </button>
                    </div>
                </form>
                <p className='txtlogin'>
                    New user? <Link to='/register'> Register</Link>
                </p>
            </main>
        </>
    );
}

export default Login;
