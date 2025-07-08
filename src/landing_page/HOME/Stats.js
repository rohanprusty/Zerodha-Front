import React from 'react';
function Stats() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row p-5 mb-5'>
                <div className='col-6 p-5 '>
                    <h1 className='mb-5'><i class="fa fa-bolt" aria-hidden="true"></i> Trust with Confidence</h1>
                    <h2 className='fs-3 mb-3'><i class="fa fa-space-shuttle" aria-hidden="true"></i>  Customer-first always</h2>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ?6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h2 className='fs-3 mb-3'><i class="fa fa-space-shuttle" aria-hidden="true"></i>  No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h2 className='fs-3 mb-3'><i class="fa fa-space-shuttle" aria-hidden="true"></i>  The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-3 mb-3'><i class="fa fa-space-shuttle" aria-hidden="true"></i>  Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-6 p-5 '>
                    <img src='/Media_photos/ecosystem.png' alt='ecosystem' style={{width:"99%"}}></img>
                    <div>
                        <a href=''  className='mx-5' style={{textDecoration:"none"}}>EXPLORE OUR PPRODUCTS <i class="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
                        <a href='' style={{textDecoration:"none"}}>TRY OUR DEMO <i class="fa fa-fire" aria-hidden="true"></i></a>
                        

                    </div>
                </div>


            </div>
        </div>
     );
}

export default Stats;