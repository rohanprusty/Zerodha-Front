import React from "react";
function CreateTicket() {
  return (
    <div className="container">
      <div className=" row p-5 mt-5">
        <h3
          className="mb-5"
          style={{ fontFamily: "fantasy", color: "#6495ED" }}
        >
          <i class="fa-solid fa-circle-notch"></i> To create a ticket, select a
          relevant topic
        </h3>
        <div className="col-4">
          <h4 className="mt-3 mb-3" style={{fontFamily:"-moz-initial"}}>
            <i class="fa-solid fa-circle-plus"></i> Account Opening
          </h4>
          <p>
            <a href="" style={{textDecoration:"none"}}>Resident individual</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Non Resident Indian (NRI)</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Company, Partnership, HUF and LLP</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Glossary</a>
            <br />
          </p>
        </div>
        <div className="col-4">
          <h4 className="mt-3 mb-3" style={{fontFamily:"-moz-initial"}}><i class="fa-solid fa-person"></i>  Your Zerodha Account</h4>
         <p>
            <a href="" style={{textDecoration:"none"}}>Your Profile</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Account modification</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Client Master Report (CMR) and Depository Participant (DP)</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Nomination</a>
            <br />
          </p>
        </div>
        <div className="col-4">
          <h4 className="mt-3 mb-3" style={{fontFamily:"-moz-initial"}}> <i class="fa-solid fa-cubes-stacked"></i> Kite</h4>
         <p>
            <a href="" style={{textDecoration:"none"}}>Trading FAQs</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Margin Trading Facility (MTF) and Margins</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Charts and orders</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>General</a>
            <br />
          </p>
        </div>
        <div className="col-4">
          <h4 className="mt-3 mb-3" style={{fontFamily:"-moz-initial"}}><i class="fa-solid fa-money-bill-wave"></i> Funds</h4>
         <p>
            <a href="" style={{textDecoration:"none"}}>Add money</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Withdraw money</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Add bank accounts</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>eMandates</a>
            <br />
          </p>
        </div>
        <div className="col-4">
          <h4 className="mt-3 mb-3" style={{fontFamily:"-moz-initial"}}><i class="fa-solid fa-terminal"></i>  Console</h4>
          <p>
            <a href="" style={{textDecoration:"none"}}>Portfolio</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Corporate actions</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Funds statement</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Segments</a>
            <br />
          </p>
        </div>
        <div className="col-4">
          <h4 className="mt-3 mb-3" style={{fontFamily:"-moz-initial"}}><i class="fa-solid fa-coins"></i>  Coin</h4>
         <p>
            <a href="" style={{textDecoration:"none"}}>Mutual funds</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>National Pension Scheme (NPS)</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Fixed Deposit (FD)</a>
            <br />
            <a href="" style={{textDecoration:"none"}}>Payments and Orders</a>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
