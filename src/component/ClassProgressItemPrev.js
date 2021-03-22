import React from 'react'

function ClassProgressItem(props) {

    let scoreColor;
    if (Number(props.score)>90){
        scoreColor= "#2BE6AE"
    } else if (Number(props.score)>70){
        scoreColor= "#51E72B"
    } else if (Number(props.score)>50){
        scoreColor= "#CCE72B"
    } else if (Number(props.score)>30){
        scoreColor= "#E7852B"
    } else {
        scoreColor= "#E6422B"
    }

    const colScore= <div className="col-3 text-center"><span className="scr " style={{color: scoreColor}}>{props.score}</span></div>
    const colUnfinished= <div className="col-3 badge-unfinished text-center"><span>Unfinished</span></div>

    return (
        <div>
            <div className="row tdata tb-myclass-progress-prev">
                <div className="col-8">
                    <a href=" ">{props.name}</a>
                </div>
                {props.score==='unfinished' ? colUnfinished : colScore}
            </div>
        </div>
    )
}

export default ClassProgressItem
