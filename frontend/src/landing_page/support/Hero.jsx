import './Support.css'

export default function Hero (){
    return (
        <>
            <section className="container-fluid flex " id='supportHero' >
                <div className="support-field margin-t mb">
                    <h5>Support Portal</h5>
                    <div className="mt-5">
                        <p>Search for an answer or browse help topics to create a ticket</p>
                        <input placeholder="Eg. how do I activate F&O" /> <br/>
                        <a href="">Track account opening</a>
                        <a href="">Track segment activation</a>
                        <a href="">Intraday margins</a>
                        <a href="">Kite user manual</a>
                    </div>
                </div>
                <div className="support-field margin-t">
                    <p style={{textAlign:'right'}} ><a href="">Track Tickets</a></p>
                    <div className="p-5 fs-16" >
                        <h5>Featured</h5>
                        <p>1. 
                            <a href="https://zerodha.com/marketintel/bulletin/404339/rights-entitlements-listing-in-february-2025">
                                Rights Entitlements listing in February 2025</a>
                        </p>
                        <p>
                            2.
                            <a href="https://zerodha.com/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co">
                                Latest Intraday leverages and Square-off timings
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}