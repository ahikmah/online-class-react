import React from 'react'
import MessageItem from '../component/MessageItem'
import MessageList from '../assets/data/message.js'
import PlusIcon from '../assets/images/Plus Icon.png'
import { Link } from 'react-router-dom'


function MessagePanel() {

    const items = MessageList.map((msg, i)=>{
    return  <MessageItem key={i.id} ava={msg.ava} name={msg.name} 
        content={msg.content} time ={msg.time} />
    })

    return (
        <>
        {/* <!-- Message Panel --> */}
        <div className="container msg-panel col">
                        {/* <!-- Head Section --> */}
                        <div className="msg-head d-flex justify-content-between ">
                            <div className="sub-label ">Messages</div>
                            <div id="msg-icon ">
                                <Link to=" "><img src={PlusIcon} alt="plus icon "/></Link>
                            </div>
                        </div>

                        {/* <!-- Search box --> */}
                        <div  className="row search-bar-message">
                            <form action="# ">
                                <div className="col form-group ">
                                    <label htmlFor="search "><i className="fas fa-search "></i></label>
                                    <input type="text " className="form-control search " name="search " placeholder="Search"/>
                                </div>
                            </form>
                        </div>

                        {/* <!-- main chat --> */}
                        <div id="chat-list ">
                            {items}
                        </div>
                    </div>
                    {/* <!-- End of Message Panel --> */}
        </>
    )
}

export default MessagePanel
