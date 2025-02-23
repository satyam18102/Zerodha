import './Support.css'

export default function Hero (){
    return (
        <>
            <div className="bg-blue " >
                <div className='margin-t flex' >
                    <div className='img '>
                        <h5 className='mb-5' >Support Portal</h5>
                        <h5>Search for an answer or browse help topics to create a ticket</h5>
                    </div>
                    <div className='img-cont' >
                        <a href="https://support.zerodha.com/login?next=https%3A%2F%2Fsupport.zerodha.com%2Ftickets%2F">
                            Track tickets
                        </a>
                        <h5>Featured</h5>
                    </div>
                </div>
            </div>
        </>
    );
}