import './Product.css'

export default function LeftSection ({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
        <>
            <div className='flex margin-top' >
                <div className='leftImg' >
                    <img src={imageURL} alt={productName} />
                </div>
                <div className='leftImg-cont' >
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <div className='flex' >
                        <div>
                            <a href={tryDemo} >Try demo</a><br/>
                            <a href={googlePlay} ><img src='googlePlayBadge.svg' /></a>
                        </div>
                        <div>
                            <a href={learnMore} >Learn more</a><br/>
                            <a href={appStore} ><img src='appstoreBadge.svg' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}