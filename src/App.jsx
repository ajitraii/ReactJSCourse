import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage, {  height, SignupPage } from './screens/LoginPage'


const App = () => {

  // const app = () => {
  //   var name = 'Guru'
  // }

  // const name = 'Guru'
  // const name = "Ajit"
  return (
    <div>

      <h1>{name}</h1>
      <h1>{height}</h1>
      <h2>WELCOME APP 2</h2>
      <LoginPage />
      <SignupPage />
    </div>
  )

}

export default App
