import React, { useState } from "react";
import "./signup.css";

function Signup() {
  const [signstate, setsignstate] = useState("Sign In");

  return (
    <div className="Login">
      <img
        src="/Media_photos/Userlogo"
        alt="login-logo"
        className="login-logo mt-5"
      />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form>
          {signstate === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Email" />
          <input type="Password" placeholder="Password" />
          <button>{signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <p>
              <a href="#" style={{ color: "#b3b3b3", textDecoration: "none" }}>
                Need Help?
              </a>
            </p>
          </div>
        </form>
        <div className="form-switch">
          {signstate === "Sign In" ? (
            <p>
              New to Zerodha ?{" "}
              <span
                onClick={() => {
                  setsignstate("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>  
          ) : (
            <p>
              Already have account ?{" "}
              <span
                onClick={() => {
                  setsignstate("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
