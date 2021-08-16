import React, { Component } from 'react'
import CartItem from './CartItem'

class Cart extends Component {
    state = {}
    render() {
        return (
            <div className="Cart-Container">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        );
    }
}

export default Cart;