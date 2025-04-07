import React, { useEffect } from 'react'

const UseEffectChild = () => {

    useEffect(() => {
        console.log('child-triggered');
        return () => {
            //clean up function
            console.log('unMounting Phase')
        }
    }, [])
    return (
        <div>
            <h3>UseEffectHook Child</h3>
        </div>
    )
}

export default UseEffectChild
