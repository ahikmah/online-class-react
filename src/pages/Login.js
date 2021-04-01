import React, { Component } from 'react';
import googleIcon from '../assets/images/icon-google.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/LoginRegister.css';
import FormFloating from '../component/FormFloating';
import axios from 'axios';

class Login extends Component {
    state = {
        username: null,
        password: null,
        userList: null,
    };

    usernameHandler = (e) => {
        this.setState({
            username: e.target.value,
        });
    };
    passwordHandler = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        const dataLogin = {
            username: this.state.username,
            password: this.state.password,
        };

        axios
            .post('http://localhost:8000/data/users/login', dataLogin)
            .then((res) => {
                if (res.data.success) {
                    this.props.history.push('/dashboard/all-schedule');
                } else {
                    alert(res.data.message);
                }
            });
    };

    render() {
        return (
            <>
                <main className='container login'>
                    <h1 className='title login'>Login</h1>
                    <form className='form login' onSubmit={this.submitHandler}>
                        <FormFloating
                            type='text'
                            id='username'
                            ph='email@example.com'
                            label='Username or Email'
                            changed={this.usernameHandler}
                        />
                        <FormFloating
                            type='password'
                            id='password'
                            ph='Password'
                            label='Password'
                            changed={this.passwordHandler}
                        />

                        <Link
                            to='/reset-password'
                            className='d-flex justify-content-end forgot-password'
                        >
                            Forgot password?
                        </Link>

                        <div className='button-group d-flex flex-column'>
                            <button
                                type='submit'
                                className='btn login btn-primer'
                            >
                                Login
                            </button>
                            <button
                                type='submit'
                                className='btn login btn-google'
                            >
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
}

export default Login;
