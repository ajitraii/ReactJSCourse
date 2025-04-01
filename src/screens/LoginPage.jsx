import React from 'react'
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


    let userName = "JOHN"
    const handleSubmit = () => {
        userName = "VIKAS"

        console.log(userName)
    }


    return (
        <div>
            <h4>Login Page </h4>
            <h3>{userName}</h3>
            <button onClick={() => { handleSubmit() }}>SUBMIT</button>
            {/* Looping in JSX */}
            {
                DATA.map((item) => {
                    return (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <h4>{item.email}</h4>
                            <h4>{item.age}</h4>
                        </div>
                    )
                })
            }


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