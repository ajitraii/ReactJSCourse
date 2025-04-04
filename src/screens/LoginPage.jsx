import React, { useState } from 'react'
import ChildA from './child/ChildA'
const DATA = [
    {
        id: 1,
        name: 'Ajit',
        email: 'ajitrai@gmail.com',
        age: 20
    },
    {
        id: 2,
        name: 'John',
        email: 'ajitrai@gmail.com',
        age: 20
    },
    {
        id: 3,
        name: 'Ugan',
        email: 'ugan@gmail.com',
        age: 20
    },
    {
        id: 4,
        name: 'Vivek',
        email: 'ajitrai@gmail.com',
        age: 22
    },
]
const LoginPage = () => {

    // useState -> first Hook

    const [userName, setUsername] = useState('')
    console.log(userName)
    // const [count, setCount] = useState(0)

    // let userName = "JOHN"
    // const handleSubmit = () => {
    //     userName = "VIKAS"

    //     console.log(userName)
    // }


    return (
        <div>
            <h4>Login Page </h4>
            {/* PropS start */}

            Name : <input placeholder='username' value={userName} onChange={(e) => setUsername(e.target.value)} /><br /><br />
            <ChildA userName={userName}/>




            {/* PropS end */}













            {/* Name : <input placeholder='username' value={userName} onChange={(e) => setUsername(e.target.value)} /><br /><br />
            Male : <input type="checkbox" name="male" id="male" value={'Male'} /> <br />
            Female : <input type="checkbox" name="female" id="female" value={'Female'} /> <br />
            Other : <input type="checkbox" name="other" id="other" value={'Other'} /> <br /> */}
            {/* <h3>{userName}</h3>
            <button onClick={() => { handleSubmit() }}>SUBMIT</button> */}
            {/* Looping in JSX */}
            {/*{
                DATA.map((item) => {
                    return (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <h4>{item.email}</h4>
                            <h4>{item.age}</h4>
                        </div>
                    )
                })
}*/}




        </div>
    )
}


export default LoginPage

//Named Export
export const SignupPage = () => {
    return (
        <div>
            <h4>Login Page </h4>
        </div>
    )
}

export const height = 120;