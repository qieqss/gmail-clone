import { Button } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.png";
import { auth, provider } from "../firebase";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={Logo} alt="" />
        <Button color="primary" variant="contained" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
