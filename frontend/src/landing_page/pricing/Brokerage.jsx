
export default function Brokerage() {
    return (
        <>
            <p className='text-center'>
                <a href="https://zerodha.com/brokerage-calculator">Calculate your costs upfront</a>
                using our brokerage calculator
            </p>
            <div className='flex margin-t margin-bottom'>
                <div className='img' >
                    <a href="#" className='text-center'>
                        <h3 className="fs-5">Brokerage calculator</h3>
                    </a>
                    <ul className='line-h text-muted' >
                        <li>
                            Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                            GST per order.
                        </li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>
                            Physical copies of contract notes, if required, shall be charged
                            ₹20 per contract note. Courier charges apply.
                        </li>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                            equity (whichever is lower).
                        </li>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                            (whichever is lower).
                        </li>
                        <li>
                            If the account is in debit balance, any order placed will be
                            charged ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                    </ul>
                </div>
                <div className='stat-cont'>
                    <a href="#" className='text-center' >
                        <h3 className="fs-5">List of charges</h3>
                    </a>
                </div>
            </div>
        </>
    );
}