import React from 'react'

const ChildC = (props) => {

    const {userName} = props;
  return (
    <div>
      <h2>ChildC</h2>
      <h3>{userName}</h3>
    </div>
  )
}

export default ChildC
