import {Link} from 'react-router-dom';

export default function Orders() {
    return (
        <>
            <div className="orders">
                <div className="no-orders">
                    <p>You haven&#34;t placed any orders today</p>

                    <Link to={"/"} className="btn">
                        Get started
                    </Link>
                </div>
            </div>
        </>
    );
}