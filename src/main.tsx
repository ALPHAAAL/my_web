import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home'

import './index.css'
import Layout from './components/Layout';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Layout />),
    children: [
      {
        path: "/",
        element: (<Home />),
      },
      {
        path: "/about",
        element: (<About />),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
