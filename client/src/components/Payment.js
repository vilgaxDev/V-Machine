import React, {Component} from 'react'
import '../css/Payment.css'
import Coin from '../components/Coin'
import AdminButton from '../components/AdminButton'


function Payment() {
    return (
    <div className="payment_container">

        <div className="payment_display">
            <div className="payment_screen">
                <div className="message">
                    {/* {message} */}
                    Deposit  Money
                
                </div>
            </div>     

            <div className="coin_group">
                <Coin value="0.05"/>
                <Coin value="0.10"/>
                <Coin value="0.25"/>
                <Coin value="1.00"/>
            </div>
            <div className="post_payment">
                <button className="coin_return_btn">
                    Change RETURN
                </button>

                <button className="coin_change_btn">
                    CHANGE
                </button>
            </div>
                <AdminButton />
        </div>

    </div>
    )
}

export default Payment
