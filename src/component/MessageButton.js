import React, { useState } from 'react'
import '../assets/css/MessageButton.css'
import MessagePanel from '../component/MessagePanel'
import Overlay from '../component/Overlay'

function MessageButton() {
    const [msgFlag, setMsgFlag] = useState(false)

    const clickHandler = () =>{
        setMsgFlag(!msgFlag)
    }
    // console.log(msgFlag);
    if(msgFlag)document.body.style.overflow = 'hidden'
    if(!msgFlag)document.body.style.overflow = 'unset'

    return (
        <>
            <button className="msg-float" type="button" onClick={clickHandler}> 
            Messages <i className="far fa-comment-dots"></i>
            </button>
            {msgFlag ? <Overlay hf={clickHandler}/> : null }
            {msgFlag ? <MessagePanel show={1}/> : null }
        </>
    )
}

export default MessageButton
