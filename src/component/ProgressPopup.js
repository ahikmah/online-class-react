import React from 'react';
import '../assets/css/ModalMember.css';
import ClassMemberList from '../assets/data/classmember';
import { Link } from 'react-router-dom';
import CloseButton from '../assets/images/close-button.png';
import ProgressPreview from '../component/ClassDetailProgressPrev';

function ProgressPopup(props) {
    const ava = ClassMemberList.map((x) => x.ava);
    const name = ClassMemberList.map((x) => x.name);

    return (
        <div className='row d-flex justify-content-center'>
            <div className='card card-progress'>
                <Link to='/facilitator/class-detail/member'>
                    {' '}
                    <img
                        className='cls-button card-progress'
                        src={CloseButton}
                        alt='close button'
                    />
                </Link>
                <header className='d-flex align-items-center'>
                    <img src={ava[props.i - 1]} alt='avatar'></img>
                    <h5>{name[props.i - 1]}</h5>
                </header>
                <hr />
                <div className='progress-prev-wrapper'>
                    <ProgressPreview />
                </div>
            </div>
        </div>
    );
}

export default ProgressPopup;
