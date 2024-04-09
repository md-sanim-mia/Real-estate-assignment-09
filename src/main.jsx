import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import Property from './Pages/Property';
import Profile from './Pages/Profile';
import CartDetails from './Pages/CartDetails';
import Login from './FormRealted/Login';
import Register from './FormRealted/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivtedRout from './PrivtedRout/PrivtedRout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/property',
        element: <Property></Property>,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/cartDeatils/:id',
        element: (
          <PrivtedRout>
            <CartDetails></CartDetails>
          </PrivtedRout>
        ),
        loader: () => fetch('/Data.json'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
