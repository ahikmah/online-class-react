import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function FormFloating(props) {
    return (            
        <div>
            <div className="form-floating">
                <input type={props.type} id={props.id} className="form-control form-input-float" placeholder={props.ph} onChange={props.changed}/>
                <label htmlFor={props.id} className="label-form-float">{props.label}</label>
            </div>
        </div>
    )
}

export default FormFloating
