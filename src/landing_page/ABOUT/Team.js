import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1
          className="fs-3 text-center mt-5 mb-5"
          style={{ color: "##606060", fontFamily:"fantasy" }}
        >
          Meet the person behind Zerodha-CLONE{" "}
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
        </h1>
        <div className="col-6 ">
          <img
            src="\Media_photos\rohanpic.jpg"
            alt="Rohan Kumar Prusty"
            className="rounded-circle"
            style={{ width: "300px", height: "300px", marginLeft: "250px" }}
          />
          <h2
            className="mt-3"
            style={{ fontFamily: "cursive", marginLeft: "250px" }}
          >
            Rohan Kumar Prusty
          </h2>
          <p
            className="text-muted fs-5 mt-1 p-3"
            style={{
              fontFamily: "fantasy",
              letterSpacing: "3px",
              marginLeft: "270px",
            }}
          >
            {" "}
            MERN Stack Developer <br />
            ECE ~IIIT JABALPUR
          </p>
          <p className="text-muted"></p>
        </div>
        <div className="col-6">
          <p
            className="text-muted fs-6"
            style={{
              lineHeight: "1.9",
              color: "#606060",
              fontFamily: "cursive",
            }}
          >
            <i
              class="fa fa-play"
              aria-hidden="true "
              style={{ marginRight: "10px" }}
            ></i>{" "}
            Hello! I'm Rohan Kumar Prusty, a passionate Full Stack Developer
            with a keen interest in building innovative web applications.
          </p>{" "}
          <p
            className="text-muted fs-6"
            style={{
              lineHeight: "1.9",
              color: "#606060",
              fontFamily: "cursive",
            }}
          >
            {" "}
            <i
              class="fa fa-play"
              aria-hidden="true"
              style={{ marginRight: "10px" }}
            ></i>
            I have a strong foundation in both front-end and back-end
            technologies, allowing me to create seamless user experiences and
            robust server-side functionalities.
          </p>{" "}
          <p
            className="text-muted fs-6"
            style={{
              lineHeight: "1.9",
              color: "#606060",
              fontFamily: "cursive",
            }}
          >
            {" "}
            <i
              class="fa fa-play"
              aria-hidden="true"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            My goal is to leverage my skills to contribute to exciting projects
            and continuously learn in the ever-evolving tech landscape.
          </p>
          <p
            className="text-muted fs-6"
            style={{
              lineHeight: "1.9",
              color: "#606060",
              fontFamily: "cursive",
            }}
          >
            {" "}
            <i
              class="fa fa-play"
              aria-hidden="true"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            Playing basketball is my zen.
          </p>
          <a href="https://www.linkedin.com/in/rohan-kr-prusty-7b9485311/" style={{textDecoration:"none"}}> <i class="fa-brands fa-linkedin"></i> Linkedin</a><br/>
          <a href="https://www.instagram.com/r_o_h_a_n_prusty/?hl=en" style={{textDecoration:"none"}}><i class="fa-brands fa-square-instagram"></i> instagram</a>

        </div>
      </div>
    </div>
  );
}

export default Team;
