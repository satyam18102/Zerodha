import './Home.css'

export default function Stats() {
    return (
        <>
            <div className="flex-2 mt-5">
                <div className="img-cont stat-cont">
                    <h2>Trust with confidence</h2>
                    <h3 className='mt-5'>Customer-first always</h3>
                    <p className='mb-5'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h3>No spam or gimmics</h3>
                    <p className='mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3>The Zerodha universe</h3>
                    <p className='mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3>Do better with money</h3>
                    <p className='mb-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="img text-center">
                    <img src='/ecosystem.png' alt='Largest Broker' style={{ width: '100%' }} />
                </div>
            </div>
        </>
    );
}