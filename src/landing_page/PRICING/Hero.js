import React from "react";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center border-bottom ">
        <h1
          className="mt-5 text-muted"
          style={{ fontFamily: "fantasy", fontSize: "60px" }}
        >
          {" "}
          Charges{" "}
        </h1>
        <p
          className="text-muted"
          style={{ fontSize: "20px", fontFamily: "cursive" }}
        >
          List of all charges and taxes
        </p>
        <div className="col-4">
          <img src="\Media_photos\pricing0.svg"></img>
          <h1 className="text-muted mb-3" style={{ fontFamily: "fantasy" }}>
            Free equity delivery
          </h1>
          <p className="text-muted mb-3" style={{ fontFamily: "cursive" }}>
            All equity delivery investments (NSE, BSE), are absolutely free - $
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="\Media_photos\intradayTrades.svg"></img>
          <h1 className="text-muted mb-3" style={{ fontFamily: "fantasy" }}>
            Intraday and F&O trades
          </h1>
          <p className="text-muted mb-3" style={{ fontFamily: "cursive" }}>
            Flat $ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            $20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="\Media_photos\pricingMF.svg"></img>
          <h1 className="text-muted mb-3" style={{ fontFamily: "fantasy" }}>
            Free direct MF
          </h1>
          <p className="text-muted mb-3" style={{ fontFamily: "cursive" }}>
            All direct mutual fund investments are absolutely free - $ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
