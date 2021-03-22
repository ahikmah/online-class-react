import React from 'react'
import iconList from '../assets/images/icon-list.png'
import { Link } from 'react-router-dom'
import '../assets/css/ClassMemberList.css'

function MemberItem(props) {
    return (
            <div className="member-list d-flex justify-content-between ">
                <div className="group-person">
                    <Link to={props.link}><img src={props.ava} alt="avatar member" className="ava-member"/></Link>
                    <Link to={props.link}>{props.name}</Link>
                </div>
                <div className="action"><Link to=""><img src={iconList} alt="icon list"/></Link></div>
            </div>
    )
}

export default MemberItem
