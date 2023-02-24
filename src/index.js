import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Catalogue } from './pages/Catalogue';
import { UserDetail } from './pages/UserDetail';
import { Product } from './pages/Product';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Favourites } from './pages/Favourites';
import { Cart } from './pages/Cart';


const queryClient = new QueryClient()

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'signIn',
        element: <SignIn />
      },
      {
        path: 'signUp',
        element: <SignUp />
      },
      {
        path: 'catalogue',
        element: <Catalogue />
      },
      {
        path: 'favourites',
        element: <Favourites/>
      },
      {
        path: 'cart',
        element: <Cart/>
      },
      {
        path: 'userDetail',
        element: <UserDetail />
      },
      {
        path: ':id',
        element: <Product />
      }

    ]
  }])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
    <RouterProvider router={myRouter} />
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);


