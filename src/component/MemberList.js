import React from 'react';
import ProfilePicture from '../assets/images/profile-picture.png';
import MemberItem from './MemberItem';
function MemberList(props) {
    let memberItems;

    if (props.dataMember) {
        memberItems = props.dataMember.map((item) => {
            return (
                <MemberItem
                    key={item.id}
                    idUser={item.id}
                    ava={
                        item.avatar
                            ? 'http://localhost:8000' + item.avatar
                            : ProfilePicture
                    }
                    name={item.full_name ? item.full_name : item.username}
                    link={
                        '/facilitator/class-detail/member/' +
                        props.idCourse +
                        '/' +
                        item.id
                    }
                />
            );
        });
    }
    // const MemberItems = ClassMemberList.map((member) => {
    //     return (
    //         <MemberItem
    //             key={member.id}
    //             ava={member.ava}
    //             name={member.name}
    //             link={
    //                 '/facilitator/class-detail/member/' +
    //                 props.idCourse +
    //                 '/' +
    //                 member.id
    //             }
    //             idCourse={props.idCourse}
    //         />
    //     );
    // });
    return <div>{memberItems ? memberItems : 'Welcome to the void'}</div>;
}

export default MemberList;
