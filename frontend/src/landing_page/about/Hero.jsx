import './About.css'

export default function Hero () {
    return (
        <>
            <div className="main text-center ">
                <div className='border-bottom padding'>
                    <h2>We pioneered the discount broking model in India.</h2>
                    <h2>Now, we are breaking ground with our technology.</h2>
                </div>
                <div className="flex padding-a" >
                    <div className='stat-cont fs '>
                        <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers
                            that traders and investors face in India in terms of cost, support, and technology.
                            We named the company Zerodha, a combination of Zero and &quot;Rodha&quot;, the Sanskrit word for barrier.
                        </p>
                        <p>
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                        </p>
                        <p>
                            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of
                            investment platforms, contributing over 15% of all Indian retail trading volumes.
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}