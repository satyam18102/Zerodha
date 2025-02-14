import Navbar from "../Navbar.jsx";
import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";
import Footer from "../Footer.jsx";


export default function Product () {
    return (
        <>
            <Navbar/>
            <Hero />
            <LeftSection />
            <RightSection />
            <Universe />
            <Footer />
        </>
    );
}