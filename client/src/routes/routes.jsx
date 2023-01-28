import { Children } from 'react';
import {createBrowserRouter} from 'react-router-dom';
import { Layout } from '../components/Admin/Layout/Layout';
import { UsersForm } from '../components/Admin/UsersForm/UsersForm';

import { Dashboard } from '../pages/Admin/Dashboard/Dashboard';

const router =createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Dashboard/>
            },
            {
                path:'/users/:id?',
                element:<UsersForm/>
            },
        
        ]
    },
  
])
export default router;