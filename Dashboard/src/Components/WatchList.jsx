import {Tooltip , Grow} from '@mui/material'
import {useState} from "react";

import {watchlist} from "../data/data.js";

export default function WatchList() {
    return (
        <>
            <div className="watchlist-container">
                <div className="search-container">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                        className="search"
                    />
                    <span className="counts"> {watchlist.length} / 50</span>
                </div>

                <ul className="list">
                    {watchlist.map((stock, index) => {
                        <WatchListItem stock={stock} key={index} />;
                    })}
                </ul>
            </div>
        </>
    );
}

const WatchListItem=({stock}) => {

    const [showActions , setShowActions] = useState(false);

    const handleMouseEnter = (e) => {
        setShowActions(true);
    }
    const handleMouseLeave = (e) => {
        setShowActions(false);
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <div className="item">
                <p className={stock.isDown ? 'down' : 'up'} ></p>
            </div>
        </li>
    )

}