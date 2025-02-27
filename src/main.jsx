import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './routes'
import AuthProvider from './Context/userContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AuthProvider>
    <RouterProvider router={route} />

    </AuthProvider>
  </StrictMode>,
)
