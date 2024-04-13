import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Namaz from './Namaz';
import Festivals from './Festivals';
import Foods from './Foods';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/namaz",
        element: <Namaz></Namaz>,
      },
      {
        path: "/festivals",
        element:  <Festivals></Festivals> ,
      },
      {
        path: "/foods",
        element: <Foods></Foods>  ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)


