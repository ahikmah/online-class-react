import React from 'react'
import iconList from '../assets/images/icon-list.png'
import { Link } from 'react-router-dom'

function NewClassItem(props) {
    return (
        <>
            <div className="row tdata2">
                <div className="col nm "><Link to="className-detail.html">{props.name}</Link></div>
                <div className="col 
                "><Link to="">{props.category}</Link></div>
                <div className="col 
                ">{props.desc}</div>
                <div className="col">{props.level}</div>
                <div className="col">{props.pricing}</div>
                <div className="col badge-rg"><Link to=""><span>Register</span></Link></div>
                <div className="col col-1 ls">
                    <Link to=""><img src={iconList} alt="icon list"/></Link>
                </div>
            </div>
        </>
    )
}

export default NewClassItem
