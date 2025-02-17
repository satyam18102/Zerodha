import './Home.css'

export default function Awards() {
    return (
        <>
            <div className='mb-5'>
                <div className="flex mb-5">
                    <div className="img">
                        <img src='largestBroker.svg' alt='Largest Broker' />
                    </div>
                    <div className="img-cont">
                        <h1>Largest stock broker in India</h1>
                        <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
                        <div className='flex mt-5'>
                            <div>
                                <ul>
                                    <li>
                                        <p>Futures and Options</p>
                                    </li>
                                    <li>
                                        <p>Commodity derivatives</p>
                                    </li>
                                    <li>
                                        <p>Currency derivatives</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <p>Stocks & IPOs</p>
                                    </li>
                                    <li>
                                        <p>Direct mutual funds</p>
                                    </li>
                                    <li>
                                        <p>Bonds and Govt. Securities</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    <div className="mt-5">
                        <img src='/pressLogos.png' style={{width:'80%'}} />
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}