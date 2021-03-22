import React from 'react'
import ClassProgressItem from './ClassProgressItemPrev'
import ClassProgressList from '../assets/data/classprogress'
import '../assets/css/ClassProgress.css'

function ClassDetailProgress() {
    const classProgressItems = ClassProgressList.map(cl=>{
        return <ClassProgressItem
            key = {cl.id}
            name = {cl.name}
            score = {cl.score}
        />
    })
    return (
        <div className="prg-scrl">
            {classProgressItems}
        </div>
    )
}

export default ClassDetailProgress
