import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { veridianRoutes } from './routes';
const router = createBrowserRouter([
    {
        children:[
            {
                path: veridianRoutes.home,
                element: 
            }
        ]
    }
])
function RouterApp(){
    return <RouterProvider router={router} />;
}
export default RouterApp;