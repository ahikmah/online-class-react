import React from 'react'
import {Link} from 'react-router-dom'
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

    const classActive=["col", "completed"]
    const colScore= <div className="col-2 text-center"><span className="scr " style={{color: scoreColor}}>{props.score}</span></div>
    const colUnfinished= <div className="col-2 badge-unfinished text-center"><span>Unfinished</span></div>

    return (
        <div>
            <div className="row tdata tb-myclass-progress">
                <div className="col-1"><input type="checkbox" checked={props.score==="unfinished"? false:true} disabled="disabled"/><span className="checkmark"></span></div>
                <div className="col">
                    <Link to=" ">{props.name}</Link></div>
                <div className={props.score==='unfinished' ? classActive[0] : classActive.join(' ')}>
                    {props.note}
                </div>
                {props.score==='unfinished' ? colUnfinished : colScore}
            </div>
        </div>
    )
}

export default ClassProgressItem
