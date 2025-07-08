import React from 'react';
function Awards() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='/Media_photos/largestBroker.svg'></img>
                </div>
                <div className='col-6'>
                    <h1> LARGEST STOCK BROKER IN INDIA</h1>
                    <p>
                        Zerodha is the largest stock broker in India with over 10 million clients and a market share of over 20% in the cash segment.
                        We have been consistently ranked as the best stock broker in India by various publications and industry experts.
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Over 10 million clients</li>
                                <li>Market share of over 20% in the cash segment</li>
                                <li>Ranked as the best stock broker in India</li>
                            </ul>

                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Over 1 million daily trades</li>
                                <li>Over 100 million trades executed in a year</li>
                                <li>Over 1 trillion rupees traded in a year</li>
                            </ul>

                        </div>
                    </div>
                    <img src='/Media_photos/pressLogos.png' alt='press'></img>
                </div>
            </div>
        </div>
    );
}

export default Awards;