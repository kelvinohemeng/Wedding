import React from "react";
import { useState, useEffect } from "react";
// import Home from "./Home";
import "./styles/index.scss";

export default function WelcomeScreen({ children }) {
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const expectedPassword = "iamadinkra";
  const loginKey = "isLoggedIn";
  useEffect(() => {
    const storedLogin = localStorage.getItem(loginKey);
    if (storedLogin) {
      setIsLoggedIn(true);
    }
  }, []);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === expectedPassword) {
      setIsLoggedIn(true);
      setPassword("");
      setErr(null);
      localStorage.setItem(loginKey, true);
    } else {
      setErr("Invalid Credentials");
    }
  };

  if (isLoggedIn) {
    setTimeout(() => {
      localStorage.clear();
    }, 10000);
    return (
      // form validation
      <div>{children}</div>
    );
  } else {
    return (
      // login form

      <>
        <main className="container password-page">
          <form onSubmit={handleSubmit} className="">
            <div>
              <h1 className="title">Natasha & Manuel</h1>
              {/* <p className="holi text-1xl font-light">Welcome</p> */}
            </div>
            <div className=" form-input">
              <input
                className=""
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="password"
                required
              />
              <button type="submit" className="">
                LogIn
              </button>
              {err && <p className="err">{err}</p>}
            </div>
          </form>
          <div className="p-p-footer">
            <p>©️Copyright 2023. KAIZEN</p>
          </div>
        </main>
      </>
    );
  }
}
