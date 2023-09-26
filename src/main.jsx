import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllUsers from './components/AllUsers/AllUsers.jsx';
import Profile from './components/Profile/Profile.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element:<AllUsers />
      },
      {
        path:"Profile",
        element:<Profile />
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
