
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import LoginPage, { height, SignupPage } from './screens/LoginPage'
import UseContextHook from './screens/useContextHook/UseContextHook'
import UseEffectHook from './screens/useEffectHook/UseEffectHook'
import UseRefHook from './screens/useRefHook/UseRefHook'
import UseStateHook from './screens/useStateHook/UseStateHook'
import Navbar from './component/Navbar';
import Home from './screens/routing/Home';
import Profile from './screens/routing/Profile';
import Dashboard from './screens/routing/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Student from './screens/routing/Student';
import LeaderBoard from './screens/routing/LeaderBoard';
import Marksheet from './screens/routing/Marksheet';
import ErrorPage from './screens/routing/ErrorPage';


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <Navbar />
        <Home />
      </div>

    },
    {
      path: '/dashboard',
      element: <div>
        <Navbar />
        <Dashboard />
      </div>,
      children: [
        {
          path: 'leaderboard',
          element: <LeaderBoard />
        },
        {
          path: 'marksheet',
          element: <Marksheet />
        },
      ]
    },
    {
      path: '/profile',
      element: <div>
        <Navbar />
        <Profile />
      </div>
    },
    {
      path: '/student/:id',
      element: <div>
        <Navbar />
        <Student />
      </div>
    },
    {
      path: '*',
      element: <div>
        <ErrorPage />
      </div>
    },
  ]);

  // const app = () => {
  //   var name = 'Guru'
  // }

  // const name = 'Guru'
  // const name = "Ajit"
  return (
    <div>

      {/* <h1>{name}</h1>
      <h1>{height}</h1> */}
      {/* <h2>WELCOME TO APP </h2> */}
      {/* <LoginPage />
      <SignupPage /> */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseContextHook /> */}
      {/* <AppNavbar /> */}
      {/* <Navbar /> */}

      {/* ROUTING  */}
      <RouterProvider router={router} />
    </div>
  )

}

export default App
