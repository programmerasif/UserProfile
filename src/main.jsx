import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Profile from './components/Profile/Profile.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import Users from './components/Users/Users.jsx';
import AllUsers from './components/AllUsers/AllUsers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element:<Users />
      },
      {
        path:"allUsers",
        element:<AllUsers />
      },
      {
        path:"Profile/:id",
        element:<Profile />,
        loader: ({params}) => {return params }
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
