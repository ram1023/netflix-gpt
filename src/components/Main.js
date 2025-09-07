import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Main = () => {
  const appRouter = createBrowserRouter([
    {
      "path": "/",
      "element": <Browse/>
    },
    {
      "path": "/login",
      "element": <Login/>
    }
  ])
  return <>
    
    <RouterProvider router={appRouter}/>
    </>
    
}

export default Main;