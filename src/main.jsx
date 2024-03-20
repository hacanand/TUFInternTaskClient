import React from 'react'
import ReactDOM from 'react-dom/client'
import SubmittedCode from './components/SubmittedCode'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/submitted',
    element: <SubmittedCode />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={router}/>
 
)
