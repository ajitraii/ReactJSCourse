import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {

    const { userName } = props

    // console.log(username)
    return (
        <div>
            <h2>Child A</h2>
            {/* <h3>{userName}</h3> */}
            <ChildB userName={userName}/>
        </div>
    )
}

export default ChildA
