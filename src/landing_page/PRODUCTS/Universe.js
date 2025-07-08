import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row">
        <h4
          className="text-muted text-center p-5 mb-5"
          style={{ fontFamily: "cursive" }}
        >
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </h4>
        <h1
          className="text-muted text-center "
          style={{ fontFamily: "fantasy" }}
        >
          The Zerodha Universe
        </h1>
        <p className="text-muted text-center p-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img
            src="\Media_photos\zerodhaFundhouse.png"
            style={{ width: "200px", height: "auto", marginLeft: "40px" }}
          ></img>
          <p className="p-3 mt-3">
            Our asset management venture that is creating simple and transparent
            index funds <br />
            to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="\Media_photos\sensibullLogo.svg"
            style={{ width: "200px", height: "auto", marginLeft: "40px" }}
          ></img>
          <p className="p-3 mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="\Media_photos\goldenpiLogo.png"
            style={{ width: "200px", height: "auto", marginLeft: "40px" }}
          ></img>
          <p className="p-3 mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="\Media_photos\streakLogo.png"
            style={{ width: "200px", height: "auto", marginLeft: "40px" }}
          ></img>
          <p className="p-3 mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="\Media_photos\smallcaseLogo.png"
            style={{ width: "200px", height: "auto", marginLeft: "40px" }}
          ></img>
          <p className="p-3 mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="\Media_photos\dittoLogo.png"
            style={{ width: "100px", height: "auto", marginLeft: "40px" }}
          ></img>
          <p className="p-3 mt-3">
            Personalized advice on life and health insurance.
            <br /> No spam and no mis-selling. Sign up for free
          </p>
        </div>
      </div>

      <div className=" p-5 mt-3 mb-5 text-center ">
        <button className='p-3 btn btn-primary fs-5 mb-5 'style={{width:"25%",margin:"0 auto"}}>SIGNUP NOW  <i class="fa-solid fa-fire-flame-curved"></i></button>
      </div>
    </div>
  );
}

export default Universe;
