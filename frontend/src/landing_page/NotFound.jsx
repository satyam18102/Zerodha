import {Link} from "react-router";
import '../landing_page/home/Home.css'


export default function NotFound() {
    return (
        <>
            <div className=" text-center mt-5 margin">
                <h2 className='mt-4'>404 Not Found</h2>
                <p className='mb-5'>We couldn’t find the page you were looking for.  <Link to='/'>Visit Zerodha’s home page</Link></p>
            </div>
        </>
    );
}