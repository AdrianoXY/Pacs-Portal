import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import "./component/login.css";
import axios from "../../api/axios.jsx";

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
    e.preventDefault();
    axios.post('/Login', 
    JSON.stringify({ user, pwd })
      ).then(response =>{
        setSuccess(true);
        navigate('/home')
      })
      .catch(err => {
        if(!err?.response){
          setErrMsg('No Server Response')
        }else if (err.response?.status === 401){
          setErrMsg('Account does not exist')
        }else if (err.response?.status === 402){
          setErrMsg('Wrong Password')
        }else if (err.response?.status === 403){
          setErrMsg('Must not be null')
        }else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();
      })
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
      <div className="Login">
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
              type="account"
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
              <a href="/signup">Sign up</a>
            </span>
            <br />
            <span className="line">
              <a href="/forget">Forget Password</a>
            </span>
          </p>
        </animated.section>
      </div>
    </>
  );
};

export default Login;
