import React, { useContext, useState } from 'react'
import { UserContext } from './UseContextHook'
import { useEffect } from 'react'

const ChildC = () => {
  const [data, handleUpdate] = useContext(UserContext)

  console.log('Child C', data)

  const [name, setName] = useState(data.name)
  const [email, setEmail] = useState(data.email)

  useEffect(() => {
    setName(data.name)
    setEmail(data.email)
  }, [data])


  return (
    <div>
      <h3>Child_C</h3>
      <input placeholder='Enter Name' value={name} onChange={e => setName(e.target.value)} /> <br />
      <input placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
      <button onClick={() => {
        handleUpdate({
          name: name,
          email: email
        })
      }}>UPDATE C</button>
    </div>
  )
}

export default ChildC
