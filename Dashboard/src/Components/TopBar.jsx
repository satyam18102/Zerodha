import Menu from "./Menu.jsx";

export default function TopBar() {
    return (
        <>
            <div className="topbar-container">
                <div className="indices-container">
                    <div className="nifty">
                        <p className="index">NIFTY 50</p>
                        <p className="index-points">22,547 </p>
                        <p className="percent"> </p>
                    </div>
                    <div className="sensex">
                        <p className="index">SENSEX</p>
                        <p className="index-points">74,602</p>
                        <p className="percent"></p>
                    </div>
                </div>

                <Menu />
            </div>
        </>
    );
}