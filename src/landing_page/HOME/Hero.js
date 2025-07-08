import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='/Media_photos/homeHero.png' alt='hero img' className='mb-5'></img>
                <h1 className='mt-5'> Invest in everything </h1>
                <p>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.

                </p>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"25%",margin:"0 auto"}}>SIGNUP NOW</button>
            </div>

        </div>
     );
}

export default Hero;