import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../component/Sidebar';
import { Link, useHistory } from 'react-router-dom';
import '../assets/css/Profile.css';
import BannerProfile from '../assets/images/banner-profile.png';
import ProfilePicture from '../assets/images/profile-picture.png';
import PhoneIcon from '../assets/images/Phone Icon.png';
import PINIcon from '../assets/images/PIN Icon.png';
import ChatIcon from '../assets/images/Chats Icon.png';
import NotifIcon from '../assets/images/Notif Icon.png';
import SecurityIcon from '../assets/images/Security Icon.png';
import StorageIcon from '../assets/images/Storage Icon.png';
import Navbar from '../component/Navbar';
import ModalComp from '../component/ModalComp';
import { connect } from 'react-redux';
import { getDataUser } from '../redux/ActionCreators/auth';
import axios from 'axios';

function Profile(props) {
    const [modalShow, setModalShow] = useState(false);
    const { getUser, getDataUserReducer } = props;

    const history = useHistory();
    const ref = useRef();

    // eslint-disable-next-line
    useEffect(() => {
        if (!ref.current) {
            getUser();
            ref.current = true;
        }
    });

    const avatarUpdateHandler = (e) => {
        const token = localStorage.token;
        let formData = new FormData();
        formData.append('avatar', e.target.files[0]);

        axios
            .patch('http://localhost:8000/data/users', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token': `Bearer ${token}`,
                },
            })
            .then((res) => {
                setModalShow(true);
                console.log('Success', res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    // console.log(fullname);
    return (
        <>
            <Navbar activeMenu={0} />
            <div className='container-fluid profile'>
                <div className='row'>
                    <Sidebar activeMenu={0} />

                    {/* <!-- Content --> */}
                    <main className='content-profile'>
                        <div className='container'>
                            {/* <!-- Banner Section --> */}
                            <div id='banner-wrapper-profile'>
                                <img
                                    id='bn-background'
                                    src={BannerProfile}
                                    alt=''
                                />
                                <span id='bn-shadow'></span>

                                <img
                                    id='bn-ava'
                                    src={
                                        getDataUserReducer.isFulfilled
                                            ? getDataUserReducer.currentUser
                                                ? 'http://localhost:8000' +
                                                  getDataUserReducer.currentUser
                                                      .avatar
                                                : ProfilePicture
                                            : null
                                    }
                                    alt=''
                                />

                                <div id='bn-setting'>
                                    <label htmlFor='avatar'>
                                        <i
                                            className='fas fa-edit'
                                            style={{
                                                color:
                                                    'rgba(255, 255, 255, 0.5)',
                                                cursor: 'pointer',
                                            }}
                                        ></i>
                                        <input
                                            type='file'
                                            id='avatar'
                                            style={{ display: 'none' }}
                                            name='image'
                                            accept='image/gif,image/jpeg,image/jpg,image/png'
                                            multiple=''
                                            data-original-title='upload photos'
                                            onChange={avatarUpdateHandler}
                                        />
                                    </label>
                                </div>
                                <div id='bn-name'>
                                    {getDataUserReducer.isFulfilled
                                        ? getDataUserReducer.currentUser
                                              .full_name
                                        : null}
                                </div>
                            </div>

                            {/* <!-- Main Section --> */}
                            <section id='main-section-profile'>
                                <div id='title'>Profile Settings</div>

                                <div className='menu'>
                                    <div className='sub-menu d-flex align-items-center'>
                                        <div className='menu-icons'>
                                            <Link to=''>
                                                <img src={PhoneIcon} alt='' />
                                            </Link>
                                        </div>
                                        <div className='menu-item'>
                                            <Link to=''> Phone Numbers</Link>
                                        </div>
                                        <div className='menu-go'>
                                            <Link to=''>
                                                {' '}
                                                <i className=' fas fa-chevron-right '></i>
                                            </Link>
                                        </div>
                                        <hr />
                                    </div>
                                    <hr />
                                    <div className='sub-menu d-flex align-items-center'>
                                        <div className='menu-icons'>
                                            <Link to=''>
                                                <img src={PINIcon} alt='' />
                                            </Link>
                                        </div>
                                        <div className='menu-item'>
                                            <Link to=''> Change Password</Link>
                                        </div>
                                        <div className='menu-go'>
                                            <Link to=''>
                                                <i className=' fas fa-chevron-right '></i>
                                            </Link>
                                        </div>
                                        <hr />
                                    </div>
                                    <hr />
                                    <div className='sub-menu d-flex align-items-center'>
                                        <div className='menu-icons'>
                                            <Link to=''>
                                                <img src={ChatIcon} alt='' />
                                            </Link>
                                        </div>
                                        <div className='menu-item'>
                                            <Link to=''>Chat Setting</Link>
                                        </div>
                                        <div className='menu-go'>
                                            <Link to=''>
                                                <i className=' fas fa-chevron-right '></i>
                                            </Link>
                                        </div>
                                        <hr />
                                    </div>
                                    <hr />
                                    <div className='sub-menu d-flex align-items-center'>
                                        <div className='menu-icons'>
                                            <Link to=''>
                                                <img src={NotifIcon} alt='' />
                                            </Link>
                                        </div>
                                        <div className='menu-item'>
                                            <Link to=''>
                                                {' '}
                                                Push Notification
                                            </Link>
                                        </div>
                                        <div className='menu-go'>
                                            <Link to=''>
                                                <i className=' fas fa-chevron-right '></i>
                                            </Link>
                                        </div>
                                        <hr />
                                    </div>
                                    <hr />
                                    <div className='sub-menu d-flex align-items-center'>
                                        <div className='menu-icons'>
                                            <Link to=''>
                                                <img
                                                    src={SecurityIcon}
                                                    alt=''
                                                />
                                            </Link>
                                        </div>
                                        <div className='menu-item'>
                                            <Link to=''>
                                                {' '}
                                                Privacy and Security
                                            </Link>
                                        </div>
                                        <div className='menu-go'>
                                            <Link to=''>
                                                <i className=' fas fa-chevron-right '></i>
                                            </Link>
                                        </div>
                                        <hr />
                                    </div>
                                    <hr />
                                    <div className='sub-menu d-flex align-items-center'>
                                        <div className='menu-icons'>
                                            <Link to=''>
                                                {' '}
                                                <img src={StorageIcon} alt='' />
                                            </Link>
                                        </div>
                                        <div className='menu-item'>
                                            <Link to=''> Data and Storage</Link>
                                        </div>
                                        <div className='menu-go'>
                                            <Link to=''>
                                                {' '}
                                                <i className=' fas fa-chevron-right '></i>
                                            </Link>
                                        </div>
                                        <hr />
                                    </div>
                                    <hr />
                                </div>
                            </section>
                        </div>
                    </main>
                    {/* <!-- End of Content --> */}
                </div>
            </div>
            <ModalComp
                header='Update is Successful'
                msg='Your avatar has been updated successfully'
                show={modalShow}
                onHide={() => history.go(0)}
                variant='success'
                footermsg='OK'
            />
        </>
    );
}

const mapStatetoProps = (state) => {
    const { getDataUserReducer } = state;
    return {
        getDataUserReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () =>
            dispatch(getDataUser('http://localhost:8000/data/users/')),
    };
};
const ConnectedProfile = connect(mapStatetoProps, mapDispatchToProps)(Profile);
export default ConnectedProfile;
