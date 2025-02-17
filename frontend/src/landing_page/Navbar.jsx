import '../landing_page/home/Home.css'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom fixed-top " >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src='logo.svg' alt='Logo' style={{ width: '22%' }} />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}