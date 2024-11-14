import { createBrowserRouter } from "react-router-dom"
import Root from "../pages/Root";
import Phones from "../pages/Phones";
import Phone from "../pages/Phone";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/phones',
        element: <Phones />,
        loader: () => fetch('http://localhost:8088/phones')
      },
      {
        path: '/phone/:id',
        element: <Phone />,
        loader: ({params}) => fetch(`http://localhost:8088/phones/${params.id}`)
      }
    ]
  }
])

export default routes;