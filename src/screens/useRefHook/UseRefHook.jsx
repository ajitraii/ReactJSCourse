import React, { useEffect, useRef, useState } from 'react'
import './UseRef.css'
const UseRefHook = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const input1 = useRef(null)
    const input2 = useRef(null)
    const countUseRef = useRef(0)
    useEffect(() => {
        countUseRef.current = countUseRef.current + 1

        console.log('countUseRef.current', countUseRef.current)
        // setCount(count + 1)
    })


    const onHandleChange = () => {
        // input1.current.style.backgroundColor = 'red'
        console.log(input1.current.value)
        if (input1.current.value.length > 0) {
            // input2.current.style.color = 'green'
            input2.current.focus()
        }
    }
    return (
        <div>
            <h3 style={{ color: 'red' }}>{count}</h3>
            <h3 style={{ color: 'red' }}>{countUseRef.current = countUseRef.current + 1
            }</h3>
            <input ref={input1} className='input' placeholder='First' onChange={() => { onHandleChange() }} />
            <input ref={input2} className='input' placeholder='Secound' />

            <button onClick={() => { setCount2(count2 + 1) }}>Change</button>
        </div>
    )
}

export default UseRefHook
