import React from 'react'
import ClassMemberList from '../assets/data/classmember'
import MemberItem from './MemberItem'


function MemberList() {
    const MemberItems = ClassMemberList.map((member)=>{
        return <MemberItem key={member.id} ava={member.ava} name={member.name}/> })

    return (
        <div>
            {MemberItems}
        </div>
    )
}

export default MemberList
