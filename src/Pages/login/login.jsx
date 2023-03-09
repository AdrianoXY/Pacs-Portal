import React from "react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./component/login.css";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    setUser("");
    setPwd("");
    setSuccess(true);
    navigate("/home");
  };

  // const [style, animate] = useSpring(() => ({
  //   to: { opacity: 1, transform: 'translateY(0)' },
  //   from: { opacity: 0, transform: 'translateY(-100px)' },
  //   config: { duration: 500 }
  // }));

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <>
      <div className="Login" >
        <animated.section style={fadeIn}>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Account</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button type="submit" onClick={handleSubmit}>
              LogIn
            </button>
          </form>
          <p>
            Need an account?
            <span className="line">
              <a href="#">Sign up</a>
            </span>
            <br />
            <span className="line">
              <a href="#">Forget Password</a>
            </span>
          </p>
        </animated.section>
      </div>
    </>
  );
};

export default Login;
