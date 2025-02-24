import PageNotFoundView from '@/components/common/PageNotFoundView';
import Layout from '@/layouts/Layout';
import { RouteObject } from 'react-router-dom';
import ProjectList from '@/pages/ProjectList';

const Routes: RouteObject[] = [];

const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {path: '/', element: <ProjectList />},
    { path: '404', element: <PageNotFoundView /> },
    { path: '*', element: <PageNotFoundView /> }, // Catch-all route for invalid addresses
  ],
};
Routes.push(mainRoutes);

export default Routes;
