import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import Todo from './routes/todo';
import Auth from './routes/auth';
import { Global } from '@emotion/react';
import GlobalStyles from './styles/globalStyles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signup',
    element: <Auth />,
  },
  {
    path: '/signin',
    element: <Auth isSignIn={true} />,
  },
  {
    path: '/todo',
    element: <Todo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
