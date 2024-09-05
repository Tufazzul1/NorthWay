import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import StudyDestination from './Pages/StudyDestination/StudyDestination';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import OurBlogs from './Pages/OurBlogs/OurBlogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/destination",
        element : <StudyDestination></StudyDestination>
      },
      {
        path : "/gallery",
        element : <Gallery></Gallery>
      },
      {
        path : "/blogs",
        element : <OurBlogs></OurBlogs>
      },
      {
        path : "/contact",
        element : <Contact></Contact>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
