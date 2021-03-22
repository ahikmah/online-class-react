import React from 'react'
import ClassProgressItem from './ClassProgressItem'
import ClassProgressList from '../assets/data/classprogress'
import '../assets/css/ClassProgress.css'

function ClassDetailProgress() {
    const classProgressItems = ClassProgressList.map(cl=>{
        return <ClassProgressItem
            key = {cl.id}
            name = {cl.name}
            note = {cl.note.split(' | ').join('\n')}
            score = {cl.score}
        />
    })
    return (
        <div>
            {classProgressItems}
        </div>
    )
}

export default ClassDetailProgress
