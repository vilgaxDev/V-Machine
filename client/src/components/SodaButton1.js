import React, {Component} from 'react'
import '../css/SodaButton.css';


class SodaButton1 extends Component {
    constructor (props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }


    render() {
        return (
            <button className="soda_button">
                <div className="soda_name">
                    {/* INSERT NAME FROM BACKEND */}
                    NAME:
                </div>

                <div className="soda_price">
                    {/* INSERT PRICE FROM BACKEND */}
                    $ {}
                </div> 

                {/* INSERT SRC IMAGE FROM LOCAL */}
                <img className="soda_img" 
                    src={"src"}
                    alt="" 
                    />

                <div className="soda_stock">
                    {/* INSERT QUANTITY FROM BACKEND */}
                    QTY: {}
                </div>
            </button>       
        );
    }
}



export default SodaButton1;