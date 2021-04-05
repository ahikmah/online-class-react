import React from 'react';
import ClassMemberList from '../assets/data/classmember';
import MemberItem from './MemberItem';

function MemberList() {
    const MemberItems = ClassMemberList.map((member) => {
        return (
            <MemberItem
                key={member.id}
                ava={member.ava}
                name={member.name}
                link={'/facilitator/class-detail/member/' + member.id}
            />
        );
    });
    return <div>{MemberItems}</div>;
}

export default MemberList;
