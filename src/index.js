import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Reservation from './Pages/Reservation';
import Register from './Pages/Register';
import './style.scss';
import * as serviceWorker from "./serviceWorker";



export {Login} from './Pages/Login';
export { Register } from './Pages/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/log-in",
    element: <Login/>,
  },
  {
    path: "/reserve",
    element: <Reservation/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router}/>
  </>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();