import './pricing.css'

export default function Hero () {
    return (
        <>
            <div>
                <div className='text-center margin-top margin-bottom ' >
                    <h1 className='mt-5 margin-top text-center' >Charges </h1>
                    <p className='muted' >List of all charges and taxes</p>
                </div>
                <div className='flex' >
                    <div className='img text-center '>
                        <img src='pricing0.svg' alt='pricing1' style={{ width: '70%' }} />
                        <h3>Free equity delivery</h3>
                        <p className='text-muted small ' >All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className='img text-center ' >
                        <img src='pricingIntra.png' alt='pricing2' style={{ width: '70%' }} />
                        <h3>Intraday and F&O trades</h3>
                        <p className='text-muted small ' >Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity,
                            currency, and commodity trades. Flat ₹20 on all option trades.
                        </p>
                    </div>
                    <div className='img text-center ' >
                        <img src='pricingEquity.svg' alt='pricing2' style={{ width: '70%' }} />
                        <h3>Free direct MF</h3>
                        <p className='text-muted small ' >All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </>
    );
}