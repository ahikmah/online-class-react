import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function FormCodeVerif(props) {

    return (
        <div>
            <div className="form-group-verif d-flex justify-content-evenly">
            <input type={props.type} id={props.id+'-1'} className="form-control verif text-center" placeholder={props.ph} onChange={props.changed}/>
            <input type={props.type} id={props.id+'-2'} className="form-control verif text-center" placeholder={props.ph} onChange={props.changed}/>
            <input type={props.type} id={props.id+'-3'} className="form-control verif text-center" placeholder={props.ph} onChange={props.changed}/>
            <input type={props.type} id={props.id+'-4'} className="form-control verif text-center" placeholder={props.ph} onChange={props.changed}/>
            </div>
        </div>
    )
}

export default FormCodeVerif
