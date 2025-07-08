import React from 'react';
function Brokerage() {
    return ( 
        <div className="row p-5 mt-5">
        <div className="col-8 ">
          <h1 className="mb-5" style={{ fontFamily: "fantasy" ,color:"#6495ED" }}>Brokerage Calculator <i class="fa-solid fa-calculator"></i></h1>
          <p style={{ fontFamily: "cursive" }}>
            <li className="mb-3">$10 per order for futures and options.</li>
            <li className="mb-3">
              For a non-PIS account, 0.5% or $10 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-3">
              For a PIS account, 0.5% or $20 per executed order for equity
              (whichever is lower).
            </li>
            <li className="mb-3">
              $50 + GST as yearly account maintenance charges (AMC) charges.
            </li>
            <li className="mb-3">
              Equity and Futures - $10 per crore + GST of the traded value.

            </li>
            <li className="mb-3">
              Options - $50 per crore + GST traded value (premium value).

            </li>
            <li className="mb-3">
              Currency - $0.05 per lakh + GST of turnover for Futures and <br/> $2 per lakh + GST of premium for Options.
            </li>
          </p>
        </div>
        <div className="col-4" >
          <h1 className="mb-5" style={{ fontFamily: "fantasy", color:"#6495ED" }}>list of charges <i class="fa-solid fa-rectangle-list"></i></h1>
          <h4 className="mb-3">Corporate action order charges</h4>
          <p style={{ fontFamily: "cursive" }} className="mb-3">
            $20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <h4 className="mb-3">Off-market transfer charges</h4>
          <p style={{ fontFamily: "cursive" }} className="mb-3">$25 per transaction.</p>
          <h4 className="mb-3">Payment gateway charges</h4>
          <p style={{ fontFamily: "cursive" }} className="mb-3">$9 + GST (Not levied on transfers done via UPI)</p>
        </div>
      </div>
     );
}

export default Brokerage;