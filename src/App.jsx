
import './App.css'
import LoginPage, { height, SignupPage } from './screens/LoginPage'
import UseEffectHook from './screens/useEffectHook/UseEffectHook'
import UseRefHook from './screens/useRefHook/UseRefHook'
import UseStateHook from './screens/useStateHook/UseStateHook'


const App = () => {

  // const app = () => {
  //   var name = 'Guru'
  // }

  // const name = 'Guru'
  // const name = "Ajit"
  return (
    <div>

      {/* <h1>{name}</h1>
      <h1>{height}</h1> */}
      <h2>WELCOME TO APP </h2>
      {/* <LoginPage />
      <SignupPage /> */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      <UseRefHook />
    </div>
  )

}

export default App
