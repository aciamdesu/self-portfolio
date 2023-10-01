import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
// import About from './pages/About/About.jsx';
// import Project from './pages/Project/Project.jsx';
// import Archive from './pages/Archive/Archive.jsx';
// import Contact from './pages/Contact/Contact.jsx';
import Root from './layout/root/index.jsx';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            // {
            //     path: '/About',
            //     element: <About/>
            // },
            // {
            //     path: '/Project',
            //     element: <Project/>
            // },
            // {
            //     path: '/Archive',
            //     element: <Archive/>
            // },
            // {
            //     path: '/Contact',
            //     element: <Contact/>
            // }
        ]
    }
])

function App () {
    return <RouterProvider router={ Router }/>;
}

export default App