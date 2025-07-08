import React from 'react';
function Education() {
    return (
        <div className="container p-5 mb-5">
            <div className='row'>
                <div className='col-6'>
                    <img src='\Media_photos\education.svg' alt='Education' />
                </div>
                <div className='col-6'>
                    <h1 className='mb-3'>Free and open market education</h1>
                    <p className='text-muted '>We believe that the more you know, the better you trade. Our education platform is free and open to all.</p>
                    <a href='' style={{ textDecoration: "none" }}>VARSITY <i class="fa fa-graduation-cap" aria-hidden="true"></i></a>
                    <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{ textDecoration: "none" }}>TradingQ&A  <i class="fa fa-line-chart" aria-hidden="true"></i></a>

                </div>
            </div>
        </div>
    );
}

export default Education;