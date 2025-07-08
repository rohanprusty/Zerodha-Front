import React from 'react';
function Pricing() {
    return (
        <div className="container p-5 mb-5">
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{ textDecoration: "none" }}>SEE PRICING <i class="fa fa-fire" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>$0</h1>
                            <p> Free account opening</p>
                        </div>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>$20</h1>
                            <p> Per order brokerage for intraday and F&O trades</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;