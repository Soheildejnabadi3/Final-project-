import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Reservation from './Pages/Reservation';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "log-in",
    element: <Login/>,
  },
  {
    path: "reserve",
    element: <Reservation/>,
  },
]);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router}/>
  </>,
);