import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routers/Router';
import AuthProviders from './Providers/AuthProviders';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </AuthProviders>
  </React.StrictMode>,
)
