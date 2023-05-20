import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";
import Header from "../../layouts/Header";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history("/add");
    }
  }, []);

  async function login() {
    try {
      console.warn(username, password);
      let item = { username, password };
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      };
      console.log(options);
      let response = await fetch("http://localhost:3001/auth/login", options);
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <Header></Header>
      <div className="mt-[108px] wrapper flex flex-col">
        <input
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassWord(e.target.value)}
        ></input>
        <button onClick={login}>Login</button>
      </div>
    </>
  );
};

export default Login;
