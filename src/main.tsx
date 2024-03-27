import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home'
import Gallery from './components/Gallery';
import Layout from './components/Layout';

import './index.css'

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
      {
        path: "/blog",
        element: (<Blog />),
      },
      {
        path: "/gallery",
        element: (<Gallery />),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
