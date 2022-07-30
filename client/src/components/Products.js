import React, {Component} from 'react'
import SodaButton from './SodaButton'
import ProductReturn from './ProductReturn'
import '../css/Products.css'
import blue_soda from '../images/blue.png'
import red_soda from '../images/red.png'

class Products extends Component {

    constructor (props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }

    componentDidMount() {
      fetch("http://localhost:4000/v1/status/sodas")
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        });
    }

    render () {
      
      var {isLoaded, items} = this.state;
      // !Uncomment for debugging
      // console.log(isLoaded);
      // console.log(items);
      
      var buttons = [];
      for (var i = 0; i < this.state.items.length; i++){
        var cnt = Math.round(Math.random());
        var obj = items[i];
        if (cnt === 1){
          buttons.push(<SodaButton key={i} src={blue_soda} name={obj.name} qty={obj.quantity} cost={obj.cost} data={obj}/>);
          // buttons.push(<SodaButton key={i} src={blue_soda} obj={this.props}/>);
        } else {
          buttons.push(<SodaButton key={i} src={red_soda} name={obj.name} qty={obj.quantity} cost={obj.cost} data={obj}/>);
          // buttons.push(<SodaButton key={i} src={red_soda} obj={this.props}/>);
        }
      }
      
      if (!isLoaded) return <div>Loading....</div>;
      
      else {
        return (
          <div className="product_container">
            <div className="soda_rows">
              <div className="soda_row">
                {/* GET QUANTITY OF SODAS AVAILABLE THEN INSERT IMAGE */}
                {buttons}
              </div>
            </div>

            <div className="product_return">
                <ProductReturn />
            </div>
          </div>
        )
      }
}};

export default Products;