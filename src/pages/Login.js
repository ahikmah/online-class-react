import React, { Component } from 'react';
import googleIcon from '../assets/images/icon-google.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/LoginRegister.css';
import FormFloating from '../component/FormFloating';
import ModalComp from '../component/ModalComp';

import { connect } from 'react-redux';
import { login } from '../redux/ActionCreators/auth';

class Login extends Component {
    state = {
        username: '',
        password: '',
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

    componentDidUpdate(prevProps, prevState) {
        if (this.props.loginReducer.isPending) {
            console.log('Loading...');
        } else if (this.props.loginReducer.isFulfilled) {
            if (prevProps.loginReducer !== this.props.loginReducer) {
                localStorage.setItem(
                    'token',
                    this.props.loginReducer.result.token
                );

                this.props.history.push('/dashboard');
            }
        } else if (this.props.loginReducer.isRejected) {
            if (
                prevProps.loginReducer !== this.props.loginReducer &&
                prevState.modalShow === false
            ) {
                this.setState({
                    modalShow: true,
                });
            }
        }
    }

    loginHandler = (e) => {
        e.preventDefault();
        const dataLogin = {
            username: this.state.username,
            email: this.state.username,
            password: this.state.password,
        };
        this.props.userLogin(dataLogin);

        // this.props.getUser();
    };

    // submitHandler = (e) => {
    //     e.preventDefault();
    //     const dataLogin = {
    //         username: this.state.username,
    //         email: this.state.username,
    //         password: this.state.password,
    //     };

    //     // this.authReducer.isFulfilled ? this.authReducer.result.

    //     axios
    //         .post('http://localhost:8000/data/users/login', dataLogin)
    //         .then((res) => {
    //             if (res.data.success) {
    //                 res.data.role === 'student'
    //                     ? this.props.history.push(
    //                           '/student/dashboard/all-schedule'
    //                       )
    //                     : this.props.history.push('/facilitator/dashboard');
    //             }
    //         })
    //         .catch((err) => {
    //             this.setState({
    //                 modalShow: true,
    //             });
    //         });
    // };

    render() {
        return (
            <>
                <main className='container login'>
                    <h1 className='title login'>Login</h1>
                    <form className='form login' onSubmit={this.loginHandler}>
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
                            autocomplete='current-password'
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

const mapStateToProps = (state) => {
    const { loginReducer } = state;
    return {
        loginReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // dataLogin: (data) => dispatch(loginUser(data)),
        userLogin: (data) =>
            dispatch(login('http://localhost:8000/data/auth/login', data)),
        // getUser: () =>
        //     dispatch(getDataUser('http://localhost:8000/data/users/')),
    };
};

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ConnectedLogin;
