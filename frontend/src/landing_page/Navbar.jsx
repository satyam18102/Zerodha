import '../landing_page/home/Home.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom fixed-top " >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src='logo.svg' alt='Logo' style={{ width: '22%' }} />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/signup'}>
                                    <a className="nav-link" aria-current="page">Signup</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/about'}>
                                    <a className="nav-link" href="/about">About</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/products'}>
                                    <a className="nav-link" href="/products">Products</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/pricing'}>
                                    <a className="nav-link" href="/pricing">Pricing</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/support'}>
                                    <a className="nav-link" href="/support">Support</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}