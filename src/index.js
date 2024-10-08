import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MenPage from './pages/MenPage';
import  Product from './pages/Product'
import Layout from './pages/Layout';
import MobilesPage from './pages/MobilesPage';
import Cart from './pages/Cart'


const router =createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Dashboard/>,
      },
      {
        path: '/menpage',
        element: <MenPage/>,
      },
      {
        path: '/mobilespage',
        element: <MobilesPage/>,
      },
      {
        path: '/cart',
        element: <Cart/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      }

    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
