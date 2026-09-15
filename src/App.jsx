import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RouteLayout from "./layout/RouteLayout";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
} 

export default App