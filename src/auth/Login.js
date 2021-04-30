import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasaccount,
    setHasaccount,
    emailerr,
    passerr
  } = props;
  return (
    <section className="login">
      <div className="loginContainer">
      <img
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="Netflix logo"/>
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailerr}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passerr}</p>
        <div className="btnContainer">
          {hasaccount ? (
            <>
              <button style = {{
                 border: "none",
                  outline: "none",
                   width: "100%",
                   padding: "15px 0",
                   color: "#fff",
                   fontSize: "16px",
                   letterSpacing: "1px",
                   background: "red",
                   cursor: "pointer",
                   marginTop: "50px"
              }}
              onClick={handleLogin}>Sign In</button>
              <p>
                Don't have an account?
                <span onClick={() => setHasaccount(!hasaccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button style = {{
                 border: "none",
                  outline: "none",
                   width: "100%",
                   padding: "15px 0",
                   color: "#fff",
                   fontSize: "16px",
                   letterSpacing: "1px",
                   background: "red",
                   cursor: "pointer",
                   marginTop: "50px"
                   }}
               onClick={handleSignUp}>Sign Up</button>
              <p>
                Have an account?
                <span onClick={() => setHasaccount(!hasaccount)}>Sign In</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
