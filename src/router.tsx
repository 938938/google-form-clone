import { Router as RemixRouter } from '@remix-run/router/dist/router';
import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Preview from './pages/Preview';
import Layout from './pages/Layout';
import Submit from './pages/Submit';

export const routers: RemixRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/preview',
        element: <Preview />,
      },
      {
        path: '/submit',
        element: <Submit />,
      },
    ],
  },
]);
