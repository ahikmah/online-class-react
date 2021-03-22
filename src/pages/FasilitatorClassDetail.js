import React from 'react'
import { useParams } from "react-router-dom"
import FasilitatorDetailActivityTemp from '../templates/FasilitatorDetailActivityTemp'
import ClassDetailInformation from '../component/ClassDetailInformation'
import ClassDetailProgress from '../component/ClassDetailProgress'
import MemberList from '../component/MemberList'


function FasilitatorClassDetail() {
    let {id} = useParams()
    let content, active, pops

    if (id==="information"){
        content = <ClassDetailInformation/>
        active = 0
    } else if (id === "progress"){
        content = <ClassDetailProgress/>
        active = 1
    } else if (id === "discussion"){
        content = <h1 className="d-flex justify-content-center text-danger">404 : Not Found!</h1>
        active = 2
    } else if (id === "member"){
        content = <MemberList/>
        active = 3
    }
    
    return (
        <div>
            <FasilitatorDetailActivityTemp
            menu = {active}
            name = "Know more Javascript"
            level = "Beginner"
            category = "Software"
            price = "Free"
            body = {content}
            progress= "80"
            />
        </div>
    )
}

export default FasilitatorClassDetail
