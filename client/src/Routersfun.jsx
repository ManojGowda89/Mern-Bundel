import App from "./App"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
export default function Routersfun(){

const router = createBrowserRouter([

{
    path:"/",
    element:<App/>,
    errorElement:<h1>Page not fund</h1>
}

])



    return(
      <RouterProvider router={router} />
    )
}