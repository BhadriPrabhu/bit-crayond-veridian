import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { veridianRoutes } from './routes';
import Screen1 from '../Screens'; // Parent layout
import Home from '../Components/home/home';
import About from '../Components/about/about';
import Slide from '../Components/team/slide';
import Investment from '../Components/investment/investment';
import Contact from '../Components/Contact/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Screen1 />,
    children: [
      {
        path: veridianRoutes.home,
        element: <Home />,
      },
      {
        path: veridianRoutes.about,
        element: <About />,
      },
      {
        path: veridianRoutes.team,
        element: <Slide />,
      },
      {
        path: veridianRoutes.investment,
        element: <Investment />,
      },
      {
        path: veridianRoutes.contact,
        element: <Contact />,
      },
    ],
  },
]);

function RouterApp() {
  return <RouterProvider router={router} />;
}

export default RouterApp;
