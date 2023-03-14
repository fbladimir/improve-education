import React, { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from './components/home/Home';
import LoginHome from './components/LoginHome/LoginHome'; 
import Topbar from './components/topbar/topbar';
//import Intro from './components/intro/Intro'
//import CTA from './components/header/CTA'
import Teacher from './components/teacher/Teacher';
import Student from './components/student/Student';
import Universities from './components/universities/Universities';
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


function App() {

  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/home" />;  
  };

  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/LoginHome",
      element: <LoginHome />,
    },

    {
      path: "/profile",
      element: <Profile />,
    },

    {
      path: "/universities",
      element: <Universities />,
    },

    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: (
        <AuthRoute>

          <LoginHome />

          <Topbar /> 


        </AuthRoute>
      ),
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// const App = () => {
//   return (
//     <>
//       <Routes> 
//         <Route path='/' element={< Header /> } />  
//         <Route path='/student' element={< Student /> } /> 
//         <Route path='/teacher' element={< Teacher /> } /> 
//         <Route path='/universities' element={< Universities /> } /> 
        

//       </Routes>

//       <Topbar /> 

//     </>
//   )
// }