import React from "react";

class CartItem extends React.Component {
     state = {
          qty: 1
     };

     increment = () => {
          this.setState({ qty: this.state.qty + 1 })

     }
     decrment = () => {
          this.setState({ qty: (this.state.qty === 0 ? 0 : this.state.qty - 1) })
     }
     render() {
          
          return (
               <div className="cart-item">
                    <div className="left-block">
                         <img style={styles.img} alt="Img Product" />
                    </div>
                    <div className="right-block">
                         <div style={{ color: "red" }, styles.fontWeight}>Phone</div>
                         <div style={{ color: "#770" }, styles.fontWeight}>Rs 999</div>
                         <div style={{ color: "#770" }, styles.fontWeight}>qty {this.state.qty}</div>
                         <div className="cart-item-actions">
                              <img className="action-icons" onClick={this.increment} alt="Increment" src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" />
                              <img className="action-icons" onClick={this.decrment} alt="Decrement" src="https://t4.ftcdn.net/jpg/03/30/24/99/240_F_330249927_k8oy0p4zZqSAdxd1jxlhB0ZPT3fGLpjw.jpg" />
                              <img className="action-icons" alt="Delete" src="https://t3.ftcdn.net/jpg/02/76/19/96/240_F_276199650_Hs5K3QnXm9ZMBLd3DT44YcdWUIf8GHxO.jpg" />
                         </div>

                    </div>


               </div>
          );
     }

}
const styles = {
     img: {
          height: 110,
          width: 110,
          borderRadius: 4
     },
     fontWeight: {
          fontSize: 25,
          fontStyle: "bold"
     }
}

export default CartItem;