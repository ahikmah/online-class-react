import React from 'react';
import { Link } from 'react-router-dom';
function ClassProgressItem(props) {
    let scoreColor;
    if (Number(props.score) > 90) {
        scoreColor = '#2BE6AE';
    } else if (Number(props.score) > 70) {
        scoreColor = '#51E72B';
    } else if (Number(props.score) > 50) {
        scoreColor = '#CCE72B';
    } else if (Number(props.score) > 30) {
        scoreColor = '#E7852B';
    } else {
        scoreColor = '#E6422B';
    }

    const colScore = (
        <div className='col text-center'>
            <span className='scr ' style={{ color: scoreColor }}>
                {props.score}
            </span>
        </div>
    );
    const colUnfinished = (
        <div className='col badge-unfinished text-center'>
            <span>Unfinished</span>
        </div>
    );

    return (
        <div>
            <div className='row tdata tb-myclass-progress-prev'>
                <div className='col-8'>
                    <Link to=' '>{props.name}</Link>
                </div>
                {props.score === 'Unfinished' ? colUnfinished : colScore}
            </div>
        </div>
    );
}

export default ClassProgressItem;
