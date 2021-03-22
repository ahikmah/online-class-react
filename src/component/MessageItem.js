import React from 'react'
import { Link } from 'react-router-dom'



function MessageItem(props) {
    return (
        <div>
            <div className="group-list d-flex justify-content-between ">
                <div className="ava-chat ">
                    <Link to=" "><img src={props.ava} alt="avatar chat" className="ava-chat"/></Link>
                </div>
                <div className="col main-chat ">
                    <div className="name-chat ">
                        <Link to=" ">{props.name}</Link></div>
                    <div className="snippet-chat ">{props.content}</div>
                </div>
                <div className="time-chat">{props.time}</div>
            </div>
        </div>
    )
}

export default MessageItem
