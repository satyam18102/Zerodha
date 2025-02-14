import Navbar from "../Navbar.jsx";
import Hero from "./Hero.jsx";
import Footer from "../Footer.jsx";
import Awards from "./Awards.jsx";
import Stats from "./Stats.jsx";
import Pricing from "./Pricing.jsx";
import Education from "./Education.jsx";
import OpenAccount from "../OpenAccount.jsx";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
    );
}