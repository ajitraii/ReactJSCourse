import React from 'react'
import ChildC from './ChildC'

const ChildB = (props) => {

    const {userName} = props;
    return (
        <div>
            <h2>Child B</h2>
            <ChildC userName={userName}/>
        </div>
    )
}

export default ChildB
