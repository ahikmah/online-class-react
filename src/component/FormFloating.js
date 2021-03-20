import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function FormFloating(props) {
    return (            
        <div>
            <div className="form-floating">
                <input type={props.type} id={props.id} className="form-control" placeholder={props.ph} onChange={props.changed}/>
                <label htmlFor={props.id}>{props.label}</label>
            </div>
        </div>
    )
}

export default FormFloating
