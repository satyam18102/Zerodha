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
                            Today, our disruptive pricing models and in-house technology have made us the biggest stock
                            broker in India.
                        </p>
                        <p>
                            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of
                            investment platforms, contributing over 15% of all Indian retail trading volumes.
                        </p>
                    </div>
                    <div className='stat-cont fs '>
                        <p>
                            In addition, we run a number of popular open online educational and community initiatives
                            to empower retail traders and investors.
                        </p>
                        <p>
                            <a href='https://rainmatter.com/' > Rainmatter </a>, our fintech fund and incubator, has invested in several fintech startups with
                            the goal of growing the Indian capital markets.
                        </p>
                        <p>
                            And yet, we are always up to something new every day. Catch up on the latest updates on our
                            <a href="https://zerodha.com/z-connect">blog</a> or see what the media is <a href="https://zerodha.com/media">saying about us.</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}