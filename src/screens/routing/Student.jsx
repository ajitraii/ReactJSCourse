import React from 'react'
import { useParams } from 'react-router'

const Student = () => {
    const params = useParams()
    const {id} = params;
    return (
        <div>
            <h3>Student : {id}</h3>
        </div>
    )
}

export default Student
