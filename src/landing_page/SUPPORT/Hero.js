import React from "react";
function Hero() {
  return (
    <div className="container" id="baba">
      <div className=" row p-5 mt-5">
        <div className="col-6">
          <h1 className="mb-3" style={{ fontFamily: "-moz-initial" ,color:"#00ffbf" }}>
            Support Portal
          </h1>
          <p style={{ fontFamily: "cursive" ,color:" 	#00ffff" }}>
            Search for an answer or browse help topics to create a ticket
          </p>
          <p id="supporthero">
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Track account opening
            </a>{" "}
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Track segment activation
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Intraday margins
            </a>
            <br />
            <a href="" style={{ textDecoration: "none" }}>
              Kite user manual
            </a>{" "}
            <br />
          </p>

        <div className="input-container">
            <input type="text" required placeholder="I CARE WHAT YOU THINK " id="glow-input" className="support-input" />
            <label htmlFor="glow-input"><i className="fa-solid fa-dragon"></i></label>
        </div>


        </div>
        <div className="col-6">
          <h4 style={{ fontFamily: "-moz-initial", marginLeft: "50px" ,color:"#00ffbf"}}>
            Featured
          </h4>
          <ol id="sat">
            <li>
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                Quarterly Settlement of Funds - July 2025
              </a>{" "}
              <br />
            </li>

            <li>
              <a href="" className="mb-5" style={{ textDecoration: "none" }}>
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
              <br />
            </li>
          </ol>

          <button
            className="p-3 btn btn-primary fs-5 mb-3"
            style={{ width: "35%", margin: "0 auto", marginLeft: "40px" }}
          >
            Track tickets  <i class="fa-brands fa-wpexplorer"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
