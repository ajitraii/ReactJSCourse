import React, { useEffect, useState } from 'react'
import UseEffectChild from './UseEffectChild'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState('ajit')
    const [isVisible, setVisible] = useState(true)
    // syntax :
    // useEffect(() => {
    //     //code 
    // }, [])

    //Never do Like this
    // useEffect(()=> {

    //    setCount(count + 1) 
    // })



    const onHandleVisible = () => {
        console.log('api calling is going on...')
    }

    // onHandleVisible() --> problem

    //MOUNTING
    // useEffect(() => {
    //     onHandleVisible()
    // }, [])

    useEffect(() => {
        onHandleVisible()
    }, [data])

    return (
        <div>
            <h3>UseEffectHook</h3>
            <h3>{count}</h3>
            <h3>{data}</h3>
            <button onClick={() => { setCount(count + 1) }}>Change count</button><br />
            <button onClick={() => { setData('GURU') }}>Change Name</button>

            {isVisible && <UseEffectChild />}

            <button onClick={() => { setVisible(!isVisible) }}>Visible</button>


        </div>
    )
}

export default UseEffectHook
