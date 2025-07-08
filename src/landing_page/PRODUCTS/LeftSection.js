import React from "react";
function LeftSection( {
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore }
) {
  return (
    <div className="container">
        <div className="row ">
          <div className="col-6 p-5 mb-5">
            <img src={imageURL}   />
          </div>
          

            <div className="col-6 p-5 ">
                <h1 className="text-muted">{productName}</h1>
                <p style={{fontFamily:"cursive"}}>{productDescription}</p>
                <div className="p-3">
                <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-right-long"></i></a>
                <a href={learnMore} style={{marginLeft:"90px", textDecoration:"none"}}>Learn More <i class="fa-solid fa-right-long"></i></a>
                </div>
                <div>
                <a href={googlePlay}><img src="\Media_photos\googlePlayBadge.svg"/></a>
                <a href={appStore} style={{marginLeft:"50px"}}><img src="\Media_photos\appstoreBadge.svg"></img></a>
                </div>
                
            
            </div>

    </div>
    </div>
);
}

export default LeftSection;
