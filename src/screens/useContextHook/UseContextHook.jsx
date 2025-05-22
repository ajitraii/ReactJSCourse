import React, { createContext, useState } from 'react'
import ChildA from './ChildA'


export const UserContext = createContext()
const UseContextHook = () => {
  //create  a context


  const [user, setUser] = useState({
    name: 'ajit1',
    email: 'ajit@gmail.com'
  })

  const handleUpdate = (data) => {
    setUser(data)
  }

  return (
    <div>
      <h3>Use Context Hook</h3>
      <h3>Parent : {user.name}</h3>
      <h3>Parent : {user.email}</h3>
      <UserContext.Provider value={[user, handleUpdate]}>
        <ChildA />
      </UserContext.Provider>
      <br />
      {/* <button onClick={() => {
        handleUpdate({
          name: 'guruSaran',
          email: 'guruSaran@gmail.com'
        })
      }}>Update</button> */}

    </div>
  )
}

export default UseContextHook
