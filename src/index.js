import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import SocietyPage from './pages/SocietyPage';
import FicheSociety from './components/FicheSociety';


const router = createBrowserRouter([
  {
  path:"/",
  element: <App />,
  errorElement: <ErrorPage />
  },
  {
    path:'/presentation',
    element: <App />
  },
  {
    path: '/society/:nom',
    element: <SocietyPage />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
