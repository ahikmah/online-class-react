import React from 'react'
import { Link } from 'react-router-dom'



function MessageItem(props) {
    return (
        <div>
            
                <div className="group-list d-flex justify-content-between ">
                    <div className="ava-chat ">
                        <Link href=" "><img src={props.ava} alt="avatar chat "/></Link>
                    </div>
                    <div className="col main-chat ">
                        <div className="name-chat ">
                            <a href=" ">{props.name}</a></div>
                        <div className="snippet-chat ">{props.content}</div>
                    </div>
                    <div className="time-chat ">{props.time}</div>
                </div>
        </div>
    )
}

export default MessageItem
