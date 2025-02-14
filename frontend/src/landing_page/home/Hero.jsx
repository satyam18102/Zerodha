import './Home.css'

export default function Hero() {
    return (
        <div className="container mb-5 p-5 text-center">
            <div className="row">
                <img src="/homeHero.png" alt="pricing page" className='mb-5' />
                <h1 className='mt-5' >Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="btn btn-primary btn-lg" style={{width:"17%", margin:'0 auto',backgroundColor:"#387ed1"}} type="submit">Sign up for free</button>
            </div>
        </div>
    );
}