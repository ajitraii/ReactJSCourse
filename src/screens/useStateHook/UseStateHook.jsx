import React, { useState } from 'react'


// export const someVar = 'Ajit'

const UseStateHook = () => {
    const [userName, setUserName] = useState('Ajit')
    let name = 'Ajit'

    const onNameChange = () => {
        name = 'GURU'
        setUserName('GURU')
        // console.log(name)
    }
    return (
        <div>
            <h3>Use State Hook</h3>
            <h2>Normal Var : {name}</h2>
            <h2>useState Var : {userName}</h2>
            <button onClick={() => { onNameChange() }}>Change Name</button>
        </div>
    )
}

export default UseStateHook
