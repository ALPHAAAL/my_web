import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './components/About';
import Blog from './components/Blog';
import BlogContent from './components/BlogContent';
import Home from './components/Home'
import Gallery from './components/Gallery';
import Layout from './components/Layout';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: 'blog/:id',
        Component: BlogContent,
      },
      {
        path: "gallery",
        Component: Gallery,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
