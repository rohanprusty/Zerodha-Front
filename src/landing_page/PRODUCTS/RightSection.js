import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnmore,
}) {
  return (
    <div className="container">
      <div className="row p-3 mt-3">
        <div className="col-6 p-5 mt-5 ">
          <h1 className="text-muted">{productName}</h1>
          <p style={{ fontFamily: "cursive" }}>{productDescription}</p>
          <div className="p-3">
            <a href={learnmore} style={{ textDecoration: "none" }}>
              Learn More <i class="fa-solid fa-right-long"></i>
            </a>
          </div>
        </div>

        <div className="col-6" >
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
