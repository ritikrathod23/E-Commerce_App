import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';

import {Header} from './components/index'

import {Cart, Dashboard, Layout, Login,  MenPage, MobilesPage, Product, Product1} from './pages/index'



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
        path: '/header',
        element: <Header/>,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/menpage',
        element: <MenPage/>,
      },
      {
        path: '/mobilespage',
        element: <MobilesPage/>,
        children: []
      },
      {
        path: '/cart',
        element: <Cart/>,
      },
      
      {
        path: "/product/:id",
        element: <Product/>,
      },
      {
        path: "/product1/:id",
        element: <Product1/>,
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
