

export default function Universe () {
    return (
        <>
            <div className='container mt-5'>
                    <h2 className='text-center' >The Zerodha Universe</h2>
                    <p className='text-center' >Extend your trading and investment experience even further
                        with our partner platforms
                    </p>
                <div className="row margin-top padding-left">
                    <div className="col-4 p-3">
                        <img src='zerodhaFundhouse.png' alt='Logo' style={{ width: '70%' }} />
                        <p className='text-small  text-muted' >Our asset management venture that is creating simple
                            and transparent index funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src='sensibullLogo.svg' alt='Logo' style={{ width: '80%' }} />
                        <p className='text-small  text-muted' >Option trading platform that lets you create strategies,
                            analyze positions, and examine data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src='https://zerodha.com/static/images/partners/tijori.svg' alt='Logo' style={{ width: '60%' }} />
                        <p className='text-small  text-muted' >Investment research platform that offers detailed
                            insights on stocks, sectors, supply chains, and more.
                        </p>
                    </div>
                </div>
                <div className="row padding-left">
                    <div className="col-4 p-3">
                        <img src='streakLogo.png' alt='Logo' style={{ width: '70%' }} />
                        <p className='text-small  text-muted' >Our asset management venture that is creating simple
                            and transparent index funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src='smallcaseLogo.png' alt='Logo' style={{ width: '70%' }} />
                        <p className='text-small  text-muted' >Our asset management venture that is creating simple
                            and transparent index funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="col-4">
                        <img src='dittoLogo.png' alt='Logo' style={{ width: '50%' }} />
                        <p className='text-small  text-muted' >Our asset management venture that is creating simple
                            and transparent index funds to help you save for your goals.
                        </p>
                    </div>
                    <button className="btn btn-primary btn-lg mt-4"
                            style={{width:"18%", margin:'0 auto',backgroundColor:"#387ed1"}} type="submit">Sign up for free
                    </button>
                </div>
            </div>
        </>
    );
}