import {holdings, positions} from "../data/data.js";

export default function Positions() {
    return (
        <>
            <h3 className="title">Positions ({positions.length})</h3>

            <div className="order-table">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Avg.</th>
                        <th>LTP</th>
                        <th>P&L</th>
                        <th>Chg.</th>
                    </tr>


                    {positions.map((stock, index) => {
                        const curValue = stock.price*stock.qty;
                        const isProfit = curValue-stock.avg*stock.qty >=0;
                        const profClass = isProfit ? 'profit' : 'loss';
                        const dayClass = stock.isLoss ? 'loss' : 'profit';
                        return (
                            <tr key={index} >
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td>{curValue}</td>
                                <td className={profClass} >{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
                                <td className={profClass} >{stock.net}</td>
                                <td className={dayClass} >{stock.day}</td>
                            </tr>
                        );
                    })}


                </table>
            </div>
        </>
    );
}