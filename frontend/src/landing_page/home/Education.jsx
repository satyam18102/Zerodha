import './Home.css'

export default function Education() {
    return (
        <>
            <div className="flex-2 ">
                <div className="img">
                    <img src='/education.svg' />
                </div>
                <div className="stat-cont small  ">
                    <div className="mb-5">
                    <h2 className='mb-4'>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='https://zerodha.com/varsity'>Varsity</a>
                    </div>
                    <div>
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='https://tradingqna.com/'>TradingQ&A</a>
                    </div>
                </div>
            </div>
        </>
    );
}