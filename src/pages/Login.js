import React, { Component } from 'react';
import googleIcon from '../assets/images/icon-google.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/LoginRegister.css';
import FormFloating from '../component/FormFloating';
import axios from 'axios';
import ModalComp from '../component/ModalComp';

class Login extends Component {
    state = {
        username: null,
        password: null,
        modalShow: false,
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

    openModalHandler = () => {
        this.setState({
            modalShow: true,
        });
    };

    submitHandler = (e) => {
        e.preventDefault();
        const dataLogin = {
            username: this.state.username,
            email: this.state.username,
            password: this.state.password,
        };

        axios
            .post('http://localhost:8000/data/users/login', dataLogin)
            .then((res) => {
                if (res.data.success) {
                    res.data.role === 'student'
                        ? this.props.history.push(
                              '/student/dashboard/all-schedule'
                          )
                        : this.props.history.push('/facilitator/dashboard');
                }
            })
            .catch((err) => {
                this.setState({
                    modalShow: true,
                });
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
                <ModalComp
                    header='Sign in Failed'
                    msg='Sorry, your username or password is incorrect.'
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                    variant='danger'
                    footermsg='Try Again'
                />
            </>
        );
    }
}

export default Login;
