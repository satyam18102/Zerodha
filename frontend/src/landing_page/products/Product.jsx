import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";


export default function Product () {
    return (
        <>
            <Hero />
            <LeftSection
                imageURL='kite.png' productName='Kite'
                productDescription='Our ultra-fast flagship trading platform with streaming market data,
                 advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your
                 Android and iOS devices.'
                tryDemo='https://kite-demo.zerodha.com/'
                learnMore='https://zerodha.com/products/kite'
                googlePlay='https://play.google.com/store/apps/details?id=com.zerodha.kite3'
                appStore='https://apps.apple.com/in/app/kite-zerodha/id1449453802'
                />
            <RightSection
                imageURL='console.png' productName='Console' productDescription='The central dashboard for
                your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'
                link='https://zerodha.com/products/console'
                linkName='Learn more'
            />
            <LeftSection
                imageURL='coin.png' productName='Coin'
                productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced
                charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
                tryDemo='https://coin.zerodha.com/'
                learnMore='https://coin.zerodha.com/'
                googlePlay='https://play.google.com/store/apps/details?id=com.zerodha.coin'
                appStore='https://apps.apple.com/in/app/coin-by-zerodha/id1392892554'
            />
            <RightSection
                imageURL='kiteconnect.png' productName='Kite Connect API'
                productDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON
                APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
                link='https://kite.trade/'
                linkName='Kite Connect'
            />
            <LeftSection
                imageURL='varsity.png' productName='Varsity mobile'
                productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage
                and illustrations. Content is broken down into bite-size cards to help you learn on the go.'
                tryDemo='https://coin.zerodha.com/'
                learnMore='https://coin.zerodha.com/'
                googlePlay='https://play.google.com/store/apps/details?id=com.zerodha.varsity'
                appStore='https://apps.apple.com/in/app/coin-by-zerodha/id1392892554'
            />
            <Universe />
        </>
    );
}