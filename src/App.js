import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Navbar from "./components/navbar/Navbar.jsx"
import Rightbar from "./components/rightbar/Rightbar.jsx"
import Leftbar from "./components/leftbar/Leftbar.jsx"
import "./style.scss";


import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.js";
import { AuthContext } from "./context/authContext.js";


const App = () => {

  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }

  const Layout = ()=>{
    const {darkMode} = useContext(DarkModeContext);

    return (
      <div className={`theme-${darkMode? "dark":"light" }`}>
        <Navbar/>
        <div style={{display:"flex"}}>
          <Leftbar/>
          <div style={{flex:6}}>
           <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    )
  }

  // Creating the Root Browser Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        },
      ]
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);

  return(
    <RouterProvider router={router} />
  )
};

export default App;