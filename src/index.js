import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ErrorPage from './error-page'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Catstagram from './components/Catstagram'
import Rating from './components/Rating'
import Wordly from './components/Wordly'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/catstagram',
        element: <Catstagram />,
        errorElement: <ErrorPage />
      },
      {
        path: '/rating',
        element: <Rating />,
        errorElement: <ErrorPage />
      },
      {
        path: '/wordly',
        element: <Wordly />,
        errorElement: <ErrorPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
