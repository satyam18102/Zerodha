import './Home.css'

export default function Hero() {
    return (
        <div className="container mt-5 text-center margin">
            <div>
                <img src="/homeHero.png" alt="pricing page" className='mb-5 text-center' style={{ width: '65%' }} />
                <h1 className='mt-5' >Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="btn btn-primary btn-lg mt-4" style={{width:"18%", margin:'0 auto',backgroundColor:"#387ed1"}} type="submit">Sign up for free</button>
            </div>
        </div>
    );
}