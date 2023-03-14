import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./component/login.css";

const Signup = () => {
  const userRef = useRef();

  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <>
      <div className="Login">
        <animated.section style={fadeIn}>
          <h1>Sign up</h1>
          <form>
            <label htmlFor="firstname">First name</label>
            <input
              type="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />

            <label htmlFor="lastname">Last name</label>
            <input
              type="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />

            <label htmlFor="username">Username</label>
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
          </form>
        </animated.section>
      </div>
    </>
  );
};

export default Signup;
