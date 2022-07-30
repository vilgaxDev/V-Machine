import React, {Component} from 'react'
import '../css/SodaButton.css';


function SodaButton({src, name, qty, cost, data}) {
    //! Function receiving obj sepcific to button 
    const calcAndDisplayMessage = () => {
        console.log(data)
        // console.log(total)
        if (0 < data.cost){
            // console.log(data.cost)
            var message = "INSERT MONEY";
        } else {
            console.log('purchased');
        }
    }

    return (
            <button className="soda_button" onClick={(e) => (
                calcAndDisplayMessage(data)
            )}>
                <div className="soda_name">
                    {/* INSERT NAME FROM BACKEND */}
                    {name}
                </div>

                <div className="soda_price">
                    {/* INSERT PRICE FROM BACKEND */}
                    $ {cost}
                </div> 

                {/* INSERT SRC IMAGE FROM LOCAL */}
                <img className="soda_img" 
                    src={src}
                    alt="" 
                    />

                <div className="soda_stock">
                    {/* INSERT QUANTITY FROM BACKEND */}
                    QTY: {qty}
                </div>
            </button>       
    );
}

export default SodaButton;