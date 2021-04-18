import React from 'react';
import ClassMemberList from '../assets/data/classmember';
import MemberItem from './MemberItem';

function MemberList(props) {
    const MemberItems = ClassMemberList.map((member) => {
        return (
            <MemberItem
                key={member.id}
                ava={member.ava}
                name={member.name}
                link={
                    '/facilitator/class-detail/member/' +
                    props.idCourse +
                    '/' +
                    member.id
                }
                idCourse={props.idCourse}
            />
        );
    });
    return <div>{MemberItems}</div>;
}

export default MemberList;
