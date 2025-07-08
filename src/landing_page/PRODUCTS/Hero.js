import React from "react";
function Hero() {
  return (
    <div className="container p-3 mb-5 border-bottom">
      <div className="row p-5 mb-5 text-center">
        <h1 style={{ color: "#606060" , fontFamily:"fantasy"}}>Zerodha Products</h1>
        <h3
          className=" text-muted mt-3 fs-5 "
          style={{ fontFamily: "sans-serif" }}
        >
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="  mt-3  " style={{ fontFamily: "cursive" }}>
          Check out{" "}
          <a href="" style={{ textDecoration: "none" }}>
            {" "}
            our investment offerings
          </a>
          <i
            class="fa fa-long-arrow-right"
            aria-hidden="true"
            style={{ marginLeft: "10px" }}
          ></i>
        </p>
      </div>
    </div>
  );
}

export default Hero;
