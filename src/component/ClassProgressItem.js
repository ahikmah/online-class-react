import React from 'react';
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

    const classActive = ['col', 'completed'];
    const colScore = (
        <div className='col-2 text-center'>
            <span className='scr ' style={{ color: scoreColor }}>
                {props.score}
            </span>
        </div>
    );
    const colUnfinished = (
        <div className='col-2 badge-unfinished text-center'>
            <span>Unfinished</span>
        </div>
    );

    return (
        <div>
            <div className='row tdata tb-myclass-progress'>
                <div className='col-1'>
                    <input
                        type='checkbox'
                        checked={props.score === 'Unfinished' ? false : true}
                        disabled='disabled'
                    />
                    <span className='checkmark'></span>
                </div>
                <div className='col'>{props.name}</div>
                <div
                    className={
                        props.score === 'Unfinished'
                            ? classActive[0]
                            : classActive.join(' ')
                    }
                >
                    {props.score === 'Unfinished'
                        ? `${props.schedule}\n ${props.start}-${props.end}`
                        : 'You have completed this topic'}
                </div>
                {props.score === 'Unfinished' ? colUnfinished : colScore}
            </div>
        </div>
    );
}

export default ClassProgressItem;
