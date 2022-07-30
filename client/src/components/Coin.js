import React from 'react'
import '../css/Coin.css'

function Coin({value}) {
    return (
        <button className="coin_btn">
            <div className="payment_amount">
                ${value}
            </div> 
        </button>
    )
}

export default Coin
