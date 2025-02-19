import './Product.css'

export default function RightSection ({imageURL,productName,productDescription,link,linkName}) {
    return (
        <>
            <div className='flex margin-top padding-left' >
                <div className='leftImg-cont' >
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                        <a href={link} >{linkName}</a><br/>
                    </div>
                <div className='leftImg' >
                    <img src={imageURL} alt={productName} />
                </div>
            </div>
        </>
    );
}