
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
           {
            index: true,
            element: <Home />,
           },
           {
            path: '/Project',
            element: <Project />,
           }

        ],
    },
]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
