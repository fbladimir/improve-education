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
import TeacherLogin from "./pages/login/teacherLogin";
import Register from "./pages/register/Register";
import TeacherReg from "./pages/register/teacherReg"; 
import FIU from "./components/universitiespage/FIU";
import UM from "./components/universitiespage/UM";
import KU from "./components/universitiespage/KU";
import FAU from "./components/universitiespage/FAU";
import NSU from "./components/universitiespage/NSU";
import BC from "./components/universitiespage/BC";
import FMU from "./components/universitiespage/FMU";
import FNU from "./components/universitiespage/FNU";
import LU from "./components/universitiespage/LU";
import EU from "./components/universitiespage/EU";
import Universitiespage from "./components/universitiespage/Universitiespage";
import Comments from "./CommentApp"; 
import CommentExampleComment from '../src/components/comments/CommentExampleComment';




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
      path: "/CommentApp",
      element: <CommentExampleComment />,
    },

    {
      path: "/teacherLogin",
      element: <TeacherLogin />,
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

      path: "/teacher",
      element: <Teacher />,
    },

    {
      path: "/student",
      element: <Student />,
    }, 
    
    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/teacherReg",
      element: <TeacherReg />,
    },
    {
      path: "/universitiespage",
      element: <Universitiespage />,
    },
    {
      path: "/FIU",
      element: <FIU />,
    },
    {
      path: "/UM",
      element: <UM />,
    },
    {
      path: "/KU",
      element: <KU />,
    },
    {
      path: "/FAU",
      element: <FAU />,
    },
    {
      path: "/NSU",
      element: <NSU />,
    },
    {
      path: "/BC",
      element: <BC />,
    },
    {
      path: "/FNU",
      element: <FNU />,
    },
    {
      path: "/FMU",
      element: <FMU />,
    },
    {
      path: "/LU",
      element: <LU />,
    },
    {
      path: "/EU",
      element: <EU />,
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
