import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'
import { Provider } from 'react-redux'
import store from './store.js' // ✅ make sure this path is correct

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
         path: '',
         element: <Home /> 
      },
      {
         path: 'about', 
         element: <About /> 
      },
      {
         path: 'contact', 
         element: <Contact /> 
      },
      {
         path: 'login',
          element: <Login /> 
      },
      {
         path: 'Signup',
          element: <Signup /> 
      },
      {
         path: 'user/:userId', 
         element: <User />
     },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ✅ Wrap your whole app inside Redux Provider */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
