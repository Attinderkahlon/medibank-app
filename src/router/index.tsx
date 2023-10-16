import { Outlet, useRoutes } from 'react-router-dom'
import Layout from '../components/layout'
import Home from '../pages/Home'

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ])
}
