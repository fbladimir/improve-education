import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FacebookRounded,
  ToggleOff,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { auth, provider } from "../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthContext } from "./../../context/AuthContext";
import Home from '../../components/home/Home'; 
import Google from '../../assets/google.png'; 


const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [toggleEye, setToggleEye] = useState(false);
  const [inputType, setInputType] = useState("password");
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType === "password" ? "text" : "password");
  };
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch({ type: "LOGIN_SUCCESS", payload: user });
          // console.log(user);
          navigate("/");
        }
      );
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const signInWithGoogle = () => {
    dispatch({ type: "LOGIN_START" });

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // The signed-in user info.
        const user = result.user;
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        navigate("/");
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE" });
      });
  };
  // console.log(inputs);
  return (
    <div className="login">
      <form>
        <h2>Student Login</h2>
        <div className="formInput">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>

        
        <div className="formInput">
          <input
            type={inputType}
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          
          <div className="eyeIcon" onClick={handleToggle}>
            {toggleEye ? <Visibility /> : <VisibilityOff />}
          </div>

          
        </div>
      
        <button class="button1" type="submit" onClick={handleLogin}>
         <a href="">  Login </a> 
         
        </button>

      

        <div className="formLink">

          
          <span>Don't have an account? </span>
          <Link
            to="/register"
            className="formSignup"
            style={{ textDecoration: "none" }}
          >
            {" "}
            SignUp
          </Link>
        </div>

        <div className="line"></div>
        <div className="media-options">
        </div>
        <div className="media-options">

          
          <Link
            to="#"
            className="facebook google"
            style={{ textDecoration: "none" }}
            onClick={signInWithGoogle}
          >

         <span>Login with Google</span>

          </Link>

        </div>

        
        <a href="/home" className="btn2"> Take me back </a>
        
      </form>
    </div>
  );
};

export default Login;